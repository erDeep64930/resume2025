import Layout from "@/app/shared/layout/Layout";
import Test from "@/app/temp/Test";
import MyIntro from "./MyIntro/MyIntro";


const HomePage = () => {
  return (
    <Layout>
      <MyIntro />
      <Test />
    </Layout>
  );
}

export default HomePage;
