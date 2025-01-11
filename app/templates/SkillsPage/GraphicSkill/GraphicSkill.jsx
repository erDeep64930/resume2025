import Heading from '@/app/components/Heading';
import Wrapper from '@/app/shared/Wrapper';
import React from 'react';
import Image from "next/image";
import { graphicStack } from "@/app/constant/graphicStack";
const GraphicSkill = () => {
  return (
    <Wrapper>
        <div className="my-24">
            <Heading heading="Graphic Design Skills" />

               <div className="grid grid-cols-1 lg:grid-cols-3 p-2 gap-8 text-center mt-12">
                                  {graphicStack.map(({ id, src, title, style }) => {
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

export default GraphicSkill;
