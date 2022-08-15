import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ThreadList from "./ThreadList";

interface props {

}

export const Thread: React.FC = (props: props) => {
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