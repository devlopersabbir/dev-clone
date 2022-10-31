import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";
import { FaHome } from "react-icons/fa";

const SideBarCategory = () => {
  return (
    <Stack mt="10px">
      <CategoryItem text="Home" icon={FaHome} link="/" />
      <CategoryItem active text="Linsting" icon={FaHome} link="/linsting" />
      <CategoryItem text="Potcast" icon={FaHome} link="/potcast" />
      <CategoryItem text="Tags" icon={FaHome} link="/tags" />
      <CategoryItem text="FAQ" icon={FaHome} link="/faq" />
    </Stack>
  );
};

export default SideBarCategory;
