import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export const NotFound: React.FC = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>Page Not Found</Text>
            <Text color={"gray.500"} mb={6}>ページが見つかりませんでした</Text>

            <Button colorScheme="green" as="a" href="/">ホームに戻る</Button>
        </Box>
    );
}

export default NotFound;