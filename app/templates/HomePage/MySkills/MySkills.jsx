import Title from "@/app/components/Title";
import RotatedAppSkill from "@/app/subComponents/RotatedAppSkill";
import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <div className="mt-20">
      <Title title="Skills" />

      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16">
        <div
          className="flex
 items-center py-6 md:py-12 flex-col md:flex-row px-7 md:px-0"
        >
          {/* <!--left section --> */}
          <div className=" flex-1">
            <RotatedAppSkill />
          </div>

          {/* <!-- right section --> */}
          <div className=" flex-1">
            <div className=" mx-auto">
              <h1 className="font-rye text-4xl text-sec font-semibold text-center">
                My Web Development journey with these Tech stack:~
              </h1>
              <p className="text-center font-meri text-sm lg:text-md mt-8 leading-6 tracking-wider text-pri">
                As a Web Developer involves working with different programming
                languages, frameworks, and tools to build the front-end and
                back-end of websites, ensuring they are functional, visually
                appealing, and user-friendly. have expertise in various
                technologies such as HTML, CSS, JavaScript and React . On the
                back-end, I am familiar with server-side languages like Node.js
                and work with databases such as MongoDB
              </p>
              <Image
                src="/mernstack.png"
                alt=""
                width={180}
                height={70}
                className=" mt-6 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
