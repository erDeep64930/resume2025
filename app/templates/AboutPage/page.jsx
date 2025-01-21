import AboutTimeline from "./aboutTime/AboutTimeline";
import IntroMe from "./IntroMe/IntroMe";
import MyAim from "./MyAim/MyAim";
import Testimonial from "./testimonial/Testimonial";

const AboutPage = () => {
  return (
    <div>
      <IntroMe />
      <AboutTimeline />
      <Testimonial />
      <MyAim />
      
    </div>
  );
};

export default AboutPage;
