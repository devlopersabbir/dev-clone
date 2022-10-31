import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

interface IContentLayoutProps {
  children: React.ReactNode[];
}

const ContentLayout: React.FC<IContentLayoutProps> = ({ children }) => {
  return (
    <Container maxW={"container.xl"} mx="auto" padding="5px 10px">
      <Flex justify="space-between" mt={4} gap={3}>
        <Box as="nav" flex={1.4} display={{ base: "none", md: "unset" }}>
          {children[0]}
        </Box>
        {/* middle content */}
        <Box flex={3} as="main">
          {children[1]}
        </Box>
        {/* sidebar */}
        <Box display={{ base: "none", md: "unset" }} flex={2}>
          {children[2]}
        </Box>
      </Flex>
    </Container>
  );
};

export default ContentLayout;
