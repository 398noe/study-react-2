import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";

export const CreateThread: React.FC = () => {
    const [threadName, setThreadName] = useState("");

    const handleThreadName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThreadName(event.target.value);
    }

    const createNewThread = () => {
        console.log(threadName);
        
    }

    return (
        <Box>
            <Stack minW={"full"} textAlign={"left"}>
                <Box m={4}>
                    <Heading size={"xl"}>
                        新規スレッド作成
                    </Heading>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel>スレッド名</FormLabel>
                        <Input type="text" onChange={handleThreadName} value={threadName} />
                    </FormControl>
                    <Button mt={4} colorScheme="teal" onClick={createNewThread}>新規作成</Button>
                </Box>
            </Stack>
        </Box>

    );
}

export default CreateThread;