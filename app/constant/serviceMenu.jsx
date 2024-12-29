
import { FaWordpress } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { GiSpiderWeb, GiTwirlyFlower } from "react-icons/gi";
import { TbPrompt } from "react-icons/tb";
import { RiAiGenerate2 } from "react-icons/ri";


export const servicesMenu = [
  {
    id: 1,
    name: "WEBSITE DEVELOPMENT",
    description: "Website development involves designing, building, and maintaining websites. It includes front-end and back-end development, ensuring functionality, user experience, responsiveness, and performance to meet business or client objectives.",
    
    Icon:<GiSpiderWeb />,
  },
  {
    id: 2,
    name: "WORDPRESS DEVELOPMENT",
    description:
      "WordPress development involves creating, customizing, and managing websites using the WordPress platform. It includes designing themes, developing plugins, optimizing performance, and ensuring functionality to meet client or business goals effectively.",
   
    Icon:<FaWordpress />,
  },
  {
    id: 3,
    name: "CONTENT MARKETING",
    description:
      "Content marketing involves creating, publishing, and distributing valuable, relevant content to attract and engage a target audience. It builds trust, drives traffic, and fosters conversions to achieve business goals.",
   
    Icon:<MdContentPaste />,
  },
  {
    id: 4,
    name: "LOGO DESIGNING",
    description:
      "Logo designing involves creating a unique, visually appealing symbol or graphic that represents a brand's identity. It combines creativity, typography, and color theory to communicate the brand’s values and mission.",
    
    Icon:<GiTwirlyFlower />,
  },
  {
    id: 5,
    name: "PROMPT ENGINEERING",
    description:
      "Logo designing involves creating a unique, visually appealing symbol or graphic that represents a brand's identity. It combines creativity, typography, and color theory to communicate the brand’s values and mission.",
    
    Icon:<TbPrompt />,
  },
  {
    id: 6,
    name: "GEN AI",
    description:
      "Generative AI refers to artificial intelligence systems capable of creating new content, such as text, images, music, or code. It leverages machine learning models, like transformers, to produce outputs resembling human creativity.",
    
    Icon:<RiAiGenerate2 />,
  }
];
