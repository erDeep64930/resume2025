
import Title from "@/app/components/Title";
import Wrapper from "@/app/shared/Wrapper";
import { AboutMe } from "@/app/subComponents/AboutMe";
import EducationDetails from "@/app/subComponents/EducationDetails";
import PersonalInfo from "@/app/subComponents/PersonalInfo";

const MyIntro = () => {
  return (
    <Wrapper>
      <Title title="Intro" />
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16 ">
       
        <div className=" w-full space-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 justify-between">
          {/* this is for who i am */}
          <div className="border border-pri p-5 flex flex-col space-y-10 rounded-md transform hover:scale-105 duration-300 shadow-md shadow-sec">
            <h1
             
              className="mx-20 sm:mx-5 text-center -mt-11 bg-pri hover:bg-sec border-pri border text-2xl rounded text-white font-meri py-2 "
            >
              Who i am ?
            </h1>
            <div>
              <AboutMe />
            </div>
          </div>

          {/* this is for personal info */}
          <div className="border border-pri p-5 flex flex-col space-y-10 rounded-md transform hover:scale-105 duration-300 shadow-md shadow-pri">
            <h1 className="mx-20 sm:mx-5 text-center -mt-11 bg-pri hover:bg-sec border-pri border text-2xl rounded text-white font-meri py-2 ">
              Personal Info
            </h1>
            <PersonalInfo />
          </div>

          {/* this is for education */}
          <div className="border border-pri p-5 flex flex-col space-y-10 rounded-md transform hover:scale-105 duration-300 shadow-md shadow-pri">
            <h1 className="mx-20 sm:mx-5 text-center -mt-11 bg-pri hover:bg-sec border-pri border text-2xl rounded text-white font-meri py-2 ">
              Education Profile
            </h1>
            <EducationDetails />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyIntro;
