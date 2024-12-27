import Wrapper from "@/app/shared/Wrapper";

import { frontStack } from "@/app/constant/frontendApp";
import Image from "next/image";
import Heading from "@/app/components/Heading";

const FrontendSkill = () => {
  return (
    <Wrapper>
      <div className="mt-24">
        <Heading heading="Frontend Skills" />

        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 gap-8 text-center mt-12">
          {frontStack.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md mx-auto w-full hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
              >
                <Image
                  src={src}
                  alt=""
                  className="w-full sm:w-20 mx-auto p-2"
                />
                <h5 className="mt-4">{title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default FrontendSkill;
