import Heading from "@/app/components/Heading";
import { backStack } from "@/app/constant/backendApp";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";


const BackendSkill = () => {
  return (
    <Wrapper>
    <div className="mt-24">
      <Heading heading="Backend Skills" />

      <div className="grid grid-cols-1 lg:grid-cols-3 p-2 gap-8 text-center mt-12">
        {backStack.map(({ id, src, title, style }) => {
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
}

export default BackendSkill;
