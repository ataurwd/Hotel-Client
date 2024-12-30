import React from "react";

const Heading = ({text, heading}) => {
  return (
    <div className="text-center my-20 space-y-5">
          <p className="text-secondary">{ text}</p>
      <h1 className="text-5xl font-interFont border-t-gray-200 border-t-4 border-b-4 p-4 w-1/2 mx-auto">
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
