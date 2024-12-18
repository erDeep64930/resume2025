import Heading from "@/app/components/Heading";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";

const IntroMe = () => {
  return (
    <Wrapper>
      <Heading heading="About me" />
      <div className="md:grid grid-cols-2 mx-auto items-center">
        {/* this is about section */}
        <div className=" p-8 space-y-4  ">
          <p className="text-lg font-rale tracking-widest text-center leading-10 text-gradient ">
            I am React.js & Next.js Frontend Developer . My goal is to build
            fast , scalable Mobile first responsive website that clearly
            communicate with visitors
          </p>
        </div>
        {/* this is residence section  */}
        <div className=" flex flex-col items-center">
          <div className="w-1/2 relative m-6 text-center top-[20%] ">
            <h5 className="animated-btn font-alkatra  ">
              Residence :- New Delhi , India
            </h5>
          </div>
          <div className="w-1/2 relative m-6 text-center top-[20%] ">
            <h5 className="animated-btn font-alkatra  ">
              Freelancer :- Available
            </h5>
          </div>
          <div className="w-1/2 relative m-6 text-center top-[20%] ">
            <h5 className="animated-btn font-alkatra  ">
              <a href="/cv.pdf" target="_blank">
                Download CV
              </a>
            </h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default IntroMe;
