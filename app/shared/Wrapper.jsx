

const Wrapper = ({children}) => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16">
      {children}
    </div>
  );
}

export default Wrapper;
