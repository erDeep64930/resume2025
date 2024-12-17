import Layout from "@/app/shared/layout/Layout";

import MyIntro from "./MyIntro/MyIntro";
import MySkills from "./MySkills/MySkills";
import MyServices from "./myServices/MyServices";
import ContactMe from "./contactMe/ContactMe";


const HomePage = () => {
  return (
    <Layout>
      <MyIntro />
      <MySkills />
      <MyServices />
      <ContactMe />
      
    </Layout>
  );
};

export default HomePage;
