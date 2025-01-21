import Heading from "@/app/components/Heading";

import Wrapper from "@/app/shared/Wrapper";

const MyJourney = () => {
  return (
    <Wrapper>
      <Heading heading="My Graphic Design Work" />
      <div className="my-8">
        <video
          width={1080}
          height={900}
          autoPlay
          muted
          controls
          className="border border-sec p-1"
        >
          <source src="myLogo.mp4" type="video/mp4" />
        </video>
      </div>
    </Wrapper>
  );
};

export default MyJourney;
