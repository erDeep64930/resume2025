import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const LeftSocialLinks = () => {
  

 const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={28} />
        </>
      ),
      href: "https://www.linkedin.com/in/deepak-kumar-403335271/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={28} />
        </>
      ),
      href: "https://github.com/erDeep64930",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={28} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={28} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ]; return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 mb-1 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-pri" +
              " " +
              style
            }
          >
            <Link
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSocialLinks;
