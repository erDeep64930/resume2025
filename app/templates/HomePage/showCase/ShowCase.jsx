import CodeBlocks from "@/app/subComponents/CodeBlocks";

const ShowCase = () => {
  return (
    <div>
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16">
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="w-[100%] text-4xl font-semibold ">
            Take your business
            to the next level...<br/> <br/>
              <h2 className="font-rye text-4xl text-gradient  font-semibold text-center">Website Redesign & Development</h2>
            </div>
          }
          subheading={
            "My latest work."
          }
          codeColor={"text-white"}
          codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          backgroundGradient={<div className="codeblock2 absolute"></div>}
        />
      </div>
    </div>
  );
};

export default ShowCase;
