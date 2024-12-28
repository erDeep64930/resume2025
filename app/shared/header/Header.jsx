import { navLinks } from "@/app/constant/navLinks";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className=" fixed top-8 lg:left-96  h-12 w-full  border border-white border-opacity-40 bg-white bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[34rem] lg:rounded-full mx-auto">
        <ul className="flex w-[32rem] mx-auto items-center justify-center gap-y-1 text-[0.9rem] font-medium text-center  ">
          {navLinks.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center  mx-auto hover:scale-110  transition-all duration-300"
              key={link.id}
            >
              <Link
                className={`
                flex w-full items-center justify-center  text-pri hover:text-sec transition p-2 py-1",
               `}
                href={link.path}
              >
                <div className="p-2 bg-pri/5 rounded-full mx-auto">
                  {link.icon}
                </div>
                <div className="text-[10px] p-[2px]">{link.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
