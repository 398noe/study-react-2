import { newThreadData, ThreadsData } from "../types/Threads";

export type Methods = {
    get: {
        resBody: ThreadsData
    },
    post: {
        reqBody: {
            title: string,
        }

        resBody: newThreadData
    }
}