import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Wrapper from "../shared/Wrapper";

const Test = () => {
  return (
    <Wrapper>
      <h1 className="text-3xl mt-34 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-neutral-700 text-center font-rye">
        Frontend Powerhouse <br /> Made by Deepak
      </h1>
      <h1 className="font-rye text-3xl btn-shine">this is font -rye</h1>
      <h1 className="font-rale text-3xl">this is font -rale</h1>
      <h1 className="font-meri text-3xl">this is font -meri</h1>
      <h1 className="font-robot text-3xl">this is font -robot</h1>
      <Heading heading="this is heading text" />
      <SubHeading SubHeading="this is subheading" />
    </Wrapper>
  );
};

export default Test;
