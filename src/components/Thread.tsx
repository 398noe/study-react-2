import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import ThreadList from "./ThreadList";

interface props {

}

export const Thread: React.FC = (props: props) => {
    return (
        <Box>
            <HStack>
                <Box></Box>
                <Box>
                    <ThreadList />
                </Box>
            </HStack>
        </Box>
    );
}

export default Thread;