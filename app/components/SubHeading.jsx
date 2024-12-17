import React from 'react';

const SubHeading = ({children,SubHeading}) => {
  return (
    <div>
      <h2 className="font-semibold text-3xl lg:text-4xl lg:leading-tight xl:leading-tight font-robot">{SubHeading}</h2>
    </div>
  );
}

export default SubHeading;
