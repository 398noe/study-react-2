import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface props { }

export const Header: React.FC = (props: props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box px={2}>
                        <Button as="a" href="/" variant="ghost"><Text fontSize={24} fontWeight={700}>掲示板</Text></Button>
                    </Box>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Header;