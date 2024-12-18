

const Heading = ({children,heading}) => {
  return (
    <div >

      <h1 className="text-4xl font-bold leading-snug tracking-widest lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight bg-clip-text text-transparent bg-gradient-to-r dark:from-white from-[#383127] to-[#90867D] dark:to-neutral-700 text-center font-rye">{heading}</h1>
      
    </div>
  );
}

export default Heading;
