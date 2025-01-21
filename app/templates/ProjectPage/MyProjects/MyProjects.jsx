import Heading from "@/app/components/Heading";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { myProjectInfo } from "@/app/constant/myProjectInfo";

const MyProjects = () => {
  return (
    <Wrapper>
      <Heading heading="My Projects" />

      {/* this is for card */}

      <div className="w-11/12 mx-auto max-w-[1080px]  justify-self-center gap-4 mt-16 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myProjectInfo.map((project, id) => {
            return (
              <div
                className="rounded-xl bg-white/20 p-4 pb-5 shadow-sm w-80"
                key={id}
              >
                <Link href="#" className="block rounded-md overflow-hidden ">
                  <Image
                    src="/dj.jpg"
                    className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 "
                    width={500}
                    height={500}
                    alt="project_images"
                  />
                </Link>
                <div className="mt-3">
                  <Link href="#">
                    <h2 className="block text-xl font-semibold text-gradient transition font-roboto">
                      {project.title}
                    </h2>
                  </Link>

                  <div className="mt-3 flex space-x-4 ">
                    <div className="flex text-gray-400 hover:text-gray-200 text-sm items-center cursor-pointer border border-pri px-2 py-1 rounded">
                      <span className="mr-2 text-sm">
                        <FaGithub />
                      </span>
                      Github-Link
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* this is for card */}
    </Wrapper>
  );
};

export default MyProjects;
