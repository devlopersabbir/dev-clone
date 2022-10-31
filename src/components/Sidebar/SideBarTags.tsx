import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SideBarTags = () => {
  return (
    <Stack>
      <Heading as="h3" fontSize={"xl"} mb="3">
        Popular Tags
      </Heading>
      <Box h="300px" overflowY={"scroll"}>
        <Text
          cursor={"pointer"}
          gap="2"
          _hover={{ bg: "blue.100", textDecoration: "underline" }}
          rounded="xl"
          px="2"
          py="1"
          //   fontSize={}
        >
          #javaScript
        </Text>
      </Box>
    </Stack>
  );
};

export default SideBarTags;
