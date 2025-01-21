import Layout from "@/app/shared/layout/Layout";

import MyIntro from "./MyIntro/MyIntro";
import MySkills from "./MySkills/MySkills";
import MyServices from "./myServices/MyServices";
import ContactMe from "./contactMe/ContactMe";
import MyJourney from "./myJourney/MyJourney";
import ShowCase from "./showCase/ShowCase";


const HomePage = () => {
  return (
    <Layout>
      <MyIntro />
      <MySkills />
      <MyServices />
      <ShowCase />
      <MyJourney />
      <ContactMe />
      
    </Layout>
  );
};

export default HomePage;
