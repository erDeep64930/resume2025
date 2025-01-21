import Title from "@/app/components/Title";
import { serviceInfo } from "@/app/constant/serviceInfo";

import Image from "next/image";

const MyServices = () => {
  return (
    <div>
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        <div className="  mt-16">
          <Title title="Services" />

          <div className="container mx-auto mt-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:mt-16">
              {serviceInfo.map(({ id, title, pic, desc }) => {
                return (
                  <div
                    className="group relative overflow-hidden border-2 border-white/50 rounded-xl "
                    key={id}
                  >
                    {/* overlays */}
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                    {/* img */}
                    <Image
                      width={350}
                      height={250}
                      src={pic}
                      alt=""
                      className="group-hover:scale-125 transition-all duration-500 z-50 bg-cover h-full w-full bg-no-repeat"
                    />
                    {/* subtitle */}
                    <div className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-50">
                      <span className="text-gradient font-mono">{title}</span>
                    </div>
                    {/* title */}
                    <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                      <span className="text-3xl text-white font-rye">
                        {desc}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
