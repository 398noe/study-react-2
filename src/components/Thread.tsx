import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import ThreadList from "./ThreadList";

interface props {

}

export const Thread: React.FC = (props: props) => {
    return (
        <Box>
            <VStack>
                <Box>
                    <Heading size={"xl"}>
                        新着スレッド
                    </Heading>
                </Box>
                <Box>
                    <ThreadList />
                </Box>
            </VStack>
        </Box>
    );
}

export default Thread;