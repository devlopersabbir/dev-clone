import { Flex, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SidebarIcons = () => {
  return (
    <Flex gap="2" my={5}>
      <Flex
        alignItems={"center"}
        justify="center"
        padding={2}
        transition={"0.5s ease"}
        cursor="pointer"
        _hover={{ bg: "blue.100" }}
        bg="blue.50"
        rounded="md"
      >
        <Icon as={FaFacebook} fontSize="2xl" />
      </Flex>
      <Flex
        alignItems={"center"}
        justify="center"
        padding={2}
        transition={"0.5s ease"}
        cursor="pointer"
        _hover={{ bg: "blue.100" }}
        bg="blue.50"
        rounded="md"
      >
        <Icon as={FaInstagram} fontSize="2xl" />
      </Flex>
      <Flex
        alignItems={"center"}
        justify="center"
        padding={2}
        transition={"0.5s ease"}
        cursor="pointer"
        _hover={{ bg: "blue.100" }}
        bg="blue.50"
        rounded="md"
      >
        <Icon as={FaTwitter} fontSize="2xl" />
      </Flex>
      <Flex
        alignItems={"center"}
        justify="center"
        padding={2}
        transition={"0.5s ease"}
        cursor="pointer"
        _hover={{ bg: "blue.100" }}
        bg="blue.50"
        rounded="md"
      >
        <Icon as={FaLinkedin} fontSize="2xl" />
      </Flex>
      <Flex
        alignItems={"center"}
        justify="center"
        padding={2}
        transition={"0.5s ease"}
        cursor="pointer"
        _hover={{ bg: "blue.100" }}
        bg="blue.50"
        rounded="md"
      >
        <Icon as={FaYoutube} fontSize="2xl" />
      </Flex>
    </Flex>
  );
};

export default SidebarIcons;
