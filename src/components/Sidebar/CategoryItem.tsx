import React from "react";
import type { IconType } from "react-icons";
import Link from "next/link";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface ICategoryItemProps {
  text: string;
  icon: IconType;
  active?: boolean;
  link: string;
}

const CategoryItem: React.FC<ICategoryItemProps> = ({
  text,
  icon,
  link,
  active,
}) => {
  return (
    <Link href={link}>
      <Flex
        bg={active ? "blue.100" : "unset"}
        align={"center"}
        gap="2"
        _hover={{ bg: "blue.100" }}
        rounded="md"
        px="3"
        py="2"
      >
        <Icon
          _hover={{ color: "blue.400" }}
          color={active ? "blue.400" : "unset"}
          as={icon}
          fontSize="xl"
        />
        <Text fontSize="lg" _hover={{ textDecoration: "underline" }}>
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

export default CategoryItem;
