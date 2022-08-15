export interface ThreadData {
    id: number;
    title: string;
}

export type ThreadsData = Array<ThreadData>;

export interface newThreadData {
    threadId: number;
    title: string;
}