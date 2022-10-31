import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      bg="white"
      boxShadow="sm"
      borderBottom="1px"
      borderColor="whiteAlpha.600"
    >
      <Container maxW={"container.xl"} padding="5px 10px" m="auto">
        <Flex width="100%" align="center" justify="space-between" gap={5}>
          <Flex align="center" gap={3} flexGrow={1}>
            <Image src="/images/LOGO.png" maxW={"100%"} w="70px" />
            <InputGroup maxW={"500px"}>
              <Input
                placeholder="Search..."
                width="100%"
                outlineColor="whiteAlpha.100"
              />
              <InputRightElement cursor={"pointer"}>
                <Icon as={FaSearch} fontSize="2xl" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex gap={2}>
            <Button variant={"ghost"}>Log in</Button>
            <Button variant={"outline"} colorScheme="blue">
              Create account
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
