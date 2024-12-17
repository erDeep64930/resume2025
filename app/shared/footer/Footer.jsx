import { navLinks } from "@/app/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Wrapper from "../Wrapper";
import SubHeading from "@/app/components/SubHeading";


const Footer = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 border-b-2 border-t-[1px] border-pri items-center">
        {/* logo  */}
        <div className="flex flex-col items-center justify-center space-y-10 my-4">
          <Image src="/dpk.JPG" alt="logo" width="80" height="80" className="rounded-full"/>
          <p className="text-sec">© <span className="text-pri">All Right Reserved 2025</span></p>

        </div>
        {/* link */}
        <div className="my-4 flex flex-col items-center">
          <SubHeading SubHeading="Pages"></SubHeading>
          <ul className="text-center space-y-8 font-robot mt-6">
            {navLinks.map((link,i)=>{
              return (
                <Link href={link.path} key={i}>
                  <li  className=" font-normal cursor-pointer">{link.name}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        {/* contact */}
        <div className="flex flex-col items-center space-y-2 my-4 md:my-0  ">
          <SubHeading SubHeading="Contact Me" />

          <div className="flex space-x-5  items-center p-2 ">
            <FaPhone />
            <p>+91-9939183692</p>

          </div>

          {/*  */}

          <div className="flex space-x-5  items-center p-2 ">
          <SiGmail />
            <p>erdeep64930@gmail.com</p>

          </div>
        </div>

      </div>

     
    </Wrapper>
  );
};

export default Footer;
