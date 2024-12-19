import {AiFillHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillAppstore} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import { FaHeadphonesSimple } from "react-icons/fa6";


export const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon:<AiFillHome />
      },
      {
        id: 2,
        name: "About",
        path: "/about",
        icon:<BsPersonFill />
      },
      {
        id: 3,
        name: "Skills",
        path: "/skills",
        icon:<MdHomeRepairService />
      },
      {
        id: 4,
        name: "Projects",
        path: "/projects",
        icon:<AiFillAppstore />
      },
      {
        id: 5,
        name: "Services",
        path: "/services",
        icon:<AiFillMessage />
      },
      {
        id: 6,
        name: "Contact",
        path: "/contact",
        icon:<FaHeadphonesSimple />
      },
     
]