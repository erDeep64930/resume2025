import AboutTimeline from "./aboutTime/AboutTimeline";
import IntroMe from "./IntroMe/IntroMe";
import Testimonial from "./testimonial/Testimonial";



const AboutPage = () => {
  return (
    <div>
      <IntroMe />
      <AboutTimeline />
      <Testimonial />
    </div>
  );
}

export default AboutPage;
