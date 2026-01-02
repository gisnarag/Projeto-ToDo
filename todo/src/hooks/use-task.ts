import React from "react";
import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState } from "../models/task";
import type { Task } from "../models/task";
import { delay } from "../helpers/utils";

// Hook para o estado de preparação para uma nova tarefa. Ao clicar em 'Nova Tarefa', o input assume um estado de edição e somente salva ao clicar no check.
// .toString(36) -> Converte o número para base 36 (0–9 e a–z), gerando uma string alfanumérica.
export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
    const [isDeletingTask, setIsDeletingTask] = React.useState(false);

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating
        }])
    }

    // Função para atualizar o dado no localStorage
    // id → qual tarefa vai ser atualizada. payload → o que vai mudar nessa tarefa
    // O tipo de title é o mesmo tipo do campo title da interface Task
    async function updateTask(id: string, payload: { title: Task["title"] }) {
        setIsUpdatingTask(true);
        await delay(1000);

        setTasks(tasks.map((task) => task.id === id ? {
            ...task, state: TaskState.Created, ...payload
        } : task)
        )
        setIsUpdatingTask(false);
    }

    function updateTaskStatus(id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) => task.id === id ? { ...task, concluded } : task)
        );
    }

    async function deleteTask(id: string) {
        setIsDeletingTask(true);

        await delay(1000);

        setTasks(tasks.filter((task) => task.id !== id));

        setIsDeletingTask(false);
    }

    return {
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        isUpdatingTask,
        isDeletingTask,
    }
}

