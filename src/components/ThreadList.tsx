import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { OneThreadData } from "../types/Threads";
interface props {

}

export const ThreadList: React.FC = (props: props) => {
    return (
        <Box>
            <VStack>
                <OneThread title="自宅警備員を語るスレ"/>
            </VStack>
        </Box>
    );
}

export default ThreadList;

const OneThread: React.FC<OneThreadData> = (props) => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{props.title}</Heading>
        </Box>
    );
}