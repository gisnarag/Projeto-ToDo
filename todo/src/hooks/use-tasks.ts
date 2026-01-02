// Hook para sincronizar dados do localStorage com o estado do React
import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

// Hook para listar 
// tasks é o estado sincronizado com o localStorage pela chave TASKS_KEY, e começa com [] porque esse é o valor inicial passado para o hook.
export default function useTasks() {
    const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

    async function fetchTasks() {
        if (isLoadingTasks) {
            await delay(2000);
            setIsLoadingTasks(false)
        }
        setTasks(tasksData)
    }

    React.useEffect(() => {
        fetchTasks();
    }, [tasksData]);

    return {
        tasks,
        tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
        isLoadingTasks,
    };
}