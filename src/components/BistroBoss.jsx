import React from "react";
import bgimg from "../assets/home/banner.jpg";

const BistroBoss = () => {
  return (
    <div
      className=" h-[500px] bg-cover bg-center relative my-10"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className=" text-center flex flex-col items-center justify-center space-y-5 h-[300px] bg-white absolute top-[20%] bottom-[20%] left-[10%] right-[10%] rounded-md">
        <h1 className="text-black text-4xl font-bold"></h1>
        <p className="w-1/2">
          Lorem ipsum dolor sit amet  adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
