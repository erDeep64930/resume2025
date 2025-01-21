import Layout from "@/app/shared/layout/Layout";

import MyIntro from "./MyIntro/MyIntro";
import MySkills from "./MySkills/MySkills";
import MyServices from "./myServices/MyServices";
import ContactMe from "./contactMe/ContactMe";
import MyJourney from "./myJourney/MyJourney";


const HomePage = () => {
  return (
    <Layout>
      <MyIntro />
      <MySkills />
      <MyServices />
      <MyJourney />
      <ContactMe />
      
    </Layout>
  );
};

export default HomePage;
