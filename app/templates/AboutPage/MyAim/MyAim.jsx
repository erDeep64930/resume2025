import Wrapper from "@/app/shared/Wrapper";
import React from "react";

const MyAim = () => {
  return (
    <Wrapper>
      <div className="text-zinc-300 grid gap-4 grid-cols-1 md:grid-cols-4">
        {/* box1 */}
        <div className=" p-10 rounded-xl bg-purple-500 md:col-span-2">
          hello ji
        </div>
        {/* box2 */}
        <div className="relative p-10 rounded-xl bg-purple-500">
          kaise ho
        </div>
        {/* box3 */}
        <div className=" p-10 rounded-xl bg-purple-500 hidden md:block md:row-span-2">
          sare ke sare
        </div>

        {/* box4 */}
        <div className=" p-10 rounded-xl bg-purple-500 ">
          asha karta hu aap sb ache honge
        </div>
        {/* box5 */}
        <div className="p-10 rounded-xl bg-purple-500 md:col-span-2 ">
          to chalye suru karte hai
        </div>
      </div>
    </Wrapper>
  );
};

export default MyAim;
