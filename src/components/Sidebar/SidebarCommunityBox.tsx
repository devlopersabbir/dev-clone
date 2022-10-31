import React from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

const SidebarCommunityBox = () => {
  return (
    <Box
      boxShadow="sm"
      bg="white"
      border="1px"
      borderColor="whiteAlpha.800"
      padding="10px 13px"
      rounded={"sm"}
    >
      <Stack spacing={5}>
        <Heading as="h2" fontSize={"2xl"}>
          <Text color="brand.100">DEV Community 👩‍💻👨‍💻</Text> is a community of
          942,190 amazing developers
        </Heading>
        <Text fontSize="md">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </Text>
        <Stack>
          <Button variant="outline" colorScheme="blue">
            Create account
          </Button>
          <Button variant={"ghost"}>Log in</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SidebarCommunityBox;
