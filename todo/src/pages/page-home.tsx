import Container from "../components/container";
import TasksSummary from "../core-components.tsx/tasks-summary";
import TasksList from "../core-components.tsx/tasks-list";

// space-y-3 adiciona espaço vertical (margin) entre os filhos diretos do container.
export default function PageHome() {
    return (
        <Container as="article" className="space-y-3">
            <header className="flex items-center justify-between">
                <TasksSummary />
            </header>

            <TasksList />
        </Container>
    );
}