export const TASKS_KEY = "tasks";

// Essa variável só pode assumir um desses valores, e nenhum outro.
export enum TaskState {
    Creating = 'creating',
    Created = 'created',
}

export interface Task {
    id: string;
    title: string;
    concluded?: boolean;
    state?: TaskState;
}