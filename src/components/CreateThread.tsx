import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AlertMessage from "./AlertMessage";

export const CreateThread: React.FC = () => {
    const [threadName, setThreadName] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: ""
        }
    });

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
                        <Input
                            {...register("name", { required: true, minLength: 5, maxLength: 20 })}
                            type="text" onChange={handleThreadName} value={threadName} id={"name"}
                        />
                    </FormControl>
                    <Button mt={4} colorScheme="teal" onClick={handleSubmit((data) => {
                        createNewThread();
                    })}>新規作成</Button>
                </Box>
            </Stack>
            <Stack my={2}>
                {
                    (errors.name) && (
                        <AlertMessage title="送信エラー" description="スレッド名は5〜20文字で入力してください" />
                    )
                }
            </Stack>
        </Box>

    );
}

export default CreateThread;