import { navLinks } from "@/app/constant/navLinks";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className=" fixed top-0 lg:left-96  h-[4.5rem] w-full  border border-white border-opacity-40 bg-white bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] rounded-full  "></div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium  sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.id}
            >
              <Link
                className={`
                flex w-full items-center justify-center  text-pri hover:text-sec transition p-2 py-1",
               `}
                href={link.path}
              >
                <div className="p-2 bg-pri/5 rounded-full">
                {link.icon}
                </div>
               

              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
