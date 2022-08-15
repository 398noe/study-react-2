import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { ThreadData, ThreadsData } from "../types/Threads";
interface Props {
    threads: ThreadsData;
}

export const ThreadList: React.FC<Props> = (props: Props) => {
    return (
        <Stack>
            {
                props.threads.map((v) => {
                    return <OneThread title={v.title} id={v.id} key={v.id} />
                })
            }
        </Stack>
    );
}

export default ThreadList;

const OneThread: React.FC<ThreadData> = (props) => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{props.title}</Heading>
        </Box>
    );
}