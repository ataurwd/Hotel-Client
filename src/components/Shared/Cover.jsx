import React from "react";

const Cover = ({ bgimg, heading, description, btn }) => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center bg-black w-[60%] h-[40vh] bg-opacity-60">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
