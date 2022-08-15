import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ThreadsData } from "../types/Threads";
import ThreadList from "./ThreadList";

import { apiClient } from "../lib/apiClient";

interface Props {

}

export const Thread: React.FC<Props> = (props: Props) => {
    const [threads, setThreads] = useState<ThreadsData>([]);

    useEffect(() => {
        const exec = async () => {
            const fetchedThreadsData = await fetchThreadsData();
            setThreads(fetchedThreadsData);
        }

        exec();
    }, []);

    const fetchThreadsData = async () => {
        const res = await apiClient.threads.get();
        console.log(res.body);
        return res.body;
    }

    return (
        <Box>
            <Stack minW={"full"} textAlign={"left"}>
                <Box m={4}>
                    <Heading size={"xl"}>
                        新着スレッド
                    </Heading>
                </Box>
                <Box>
                    <ThreadList threads={threads}/>
                </Box>
            </Stack>
        </Box>
    );
}

export default Thread;