const Title = ({ children, title }) => {
  return (
    <div className=" w-11/12 max-w-[1080px] mx-auto pt-4 flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24  bg-gradient-to-r dark:from-zinc-300 from-[#383127] to-[#90867D] dark:to-neutral-700 rounded-full shadow-xl relative"></div>
        <h2 className="text-3xl text-sec font-rye font-medium leading-6 absolute top-10 left-10 ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Title;
