import React from "react";
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface props { }

export const Footer: React.FC = (props: props) => {
    return (
        <Box
            pos={"fixed"}
            bottom={0}
            zIndex={100}
            w={"full"}
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}>
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}>
                <Text>Railway study project in react © 2022</Text>
                <Text>All rights reserved by @398noetan</Text>
            </Container>
        </Box>
    );
}

export default Footer;
