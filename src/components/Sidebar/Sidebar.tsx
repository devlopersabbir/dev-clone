import React from "react";
import SideBarCategory from "./SideBarCategory";
import SidebarCommunityBox from "./SidebarCommunityBox";
import SidebarIcons from "./SidebarIcons";
import SideBarTags from "./SideBarTags";

const Sidebar: React.FC = () => {
  return (
    <>
      <SidebarCommunityBox />
      <SideBarCategory />
      <SidebarIcons />
      <SideBarTags />
    </>
  );
};

export default Sidebar;
