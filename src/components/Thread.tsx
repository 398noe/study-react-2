import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ThreadsData } from "../types/Threads";
import ThreadList from "./ThreadList";

import { apiClient } from "../lib/apiClient";

interface props {

}

export const Thread: React.FC = (props: props) => {
    const [threads, setThreads] = useState<ThreadsData>([]);

    useEffect(() => {

    },[]);

    const fetchThreads = () => {
        const fetchThreadsData = async () => {
        }
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
                    <ThreadList />
                </Box>
            </Stack>
        </Box>
    );
}

export default Thread;