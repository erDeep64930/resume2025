import Layout from "@/app/shared/layout/Layout";
import Test from "@/app/temp/Test";
import MyIntro from "./MyIntro/MyIntro";
import MySkills from "./MySkills/MySkills";
import MyServices from "./myServices/MyServices";


const HomePage = () => {
  return (
    <Layout>
      <MyIntro />
      <MySkills />
      <MyServices />
      <Test />
    </Layout>
  );
}

export default HomePage;
