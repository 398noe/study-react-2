import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { ThreadData } from "../types/Threads";
interface props {

}

export const ThreadList: React.FC = (props: props) => {
    return (
        <Stack>
            <OneThread title="自宅警備員を語るスレ" id={1}/>
            <OneThread title="自宅警備員を語るスレ" id={1}/>
            <OneThread title="自宅警備員を語るスレ" id={1}/>
            <OneThread title="自宅警備員を語るスレ" id={1}/>
            <OneThread title="自宅警備員を語るスレ" id={1}/>
            <OneThread title="自宅警備員を語るスレ" id={1}/>
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