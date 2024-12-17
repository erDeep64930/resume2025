import { eduInfo } from "@/app/constant/eduInfo";
import React from "react";

import { FaAward } from "react-icons/fa";
const EducationDetails = () => {
  return (
    <div>
      <div className="col-span-1 flex flex-col text-center bg-white/10 rounded-lg shadow divide-y divide-pri">
        <div className="mb-2">
          {eduInfo.map(
            ({
              id,
              title,
              desc,
              sub,
              stream,
              desTitle,
              collName,
              year,
              date
            }) => {
              return (
                <div
                  className="flex-col items-center font-semibold leading-4  transition px-5 py-2  border-b border-pri "
                  key={id}
                >
                  <div className="item-center bg-black/70 inline-block p-2 rounded-full">
                    <FaAward className="text-sec" />
                  </div>

                  <div className="flex">
                    <span className="text-pri text-sm font-rale">
                      {" "}
                      {title}
                    </span>
                    <span className="text-pri ml-2">:</span>
                    <span className="font-normal ml-auto text-sec text-xs">
                      {desc}
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-pri text-sm font-robot">
                      {" "}
                      {sub}
                    </span>
                    <span className="text-pri ml-2">:</span>
                    <span className="font-normal ml-auto text-sec text-xs">
                      {stream}
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-pri text-sm font-bai">
                      {" "}
                      {desTitle}
                    </span>
                    <span className="text-pri ml-2">:</span>
                    <span className="font-normal ml-auto text-pri text-xs">
                      {collName}
                    </span>
                  </div>

                  <div className="flex">
                    <span className="text-pri text-sm font-bai">
                      {" "}
                      {year}
                    </span>
                    <span className="text-pri ml-2">:</span>
                    <span className="font-normal ml-auto text-pri text-xs">
                      {date}
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
