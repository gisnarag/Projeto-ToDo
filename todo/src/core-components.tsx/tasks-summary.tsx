import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";


// " ! " no Tailwind equivale a !important no CSS. Ele força essa classe a ter prioridade maior, evitando que estilos de cor vindos de componentes compostos (como o Badge) acabem vencendo na cascata do CSS.
export default function TasksSummary() {
    const { tasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

    return (
        <>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Tarefas Criadas</Text>
                <Badge variant="secondary" loading={isLoadingTasks}>{tasksCount}</Badge>
            </div>

            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
                <Badge variant="primary" loading={isLoadingTasks}>{concludedTasksCount} de {tasksCount}</Badge>
            </div>
        </>
    );
}