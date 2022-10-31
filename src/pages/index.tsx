import type { NextPage } from "next";
import ContentLayout from "../components/ContentLayout";

import Layout from "../components/Layout";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import Widgets from "../components/Widgets/Widgets";

const Home: NextPage = () => {
  return (
    <Layout>
      <ContentLayout>
        <Sidebar />
        <Main />
        <Widgets />
      </ContentLayout>
    </Layout>
  );
};

export default Home;
