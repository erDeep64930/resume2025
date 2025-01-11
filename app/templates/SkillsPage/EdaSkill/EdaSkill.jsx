import Heading from '@/app/components/Heading';
import Wrapper from '@/app/shared/Wrapper';
import Image from "next/image";
import { edaStack } from "@/app/constant/edaStack";

const EdaSkill = () => {
  return (
    <Wrapper>
        <div className="my-24">
            <Heading heading="EDA Skills"/>


            <div className="grid grid-cols-1 lg:grid-cols-3 p-2 gap-8 text-center mt-12">
                      {edaStack.map(({ id, src, title, style }) => {
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

export default EdaSkill;
