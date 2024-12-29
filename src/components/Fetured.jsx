import React from "react";
import fetured from "../assets/home/featured.jpg";
import { Link } from "react-router-dom";

const Fetured = () => {
  return (
    <div
      className="relative my-10 pt-1 pb-20 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url(${fetured})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative text-center my-20 space-y-5 z-10">
        <p className="text-secondary">---Check it out---</p>
        <h1 className="text-5xl font-interFont border-t-gray-200 border-t-4 border-b-4 p-4 w-1/2 mx-auto text-white">
          FROM OUR MENU
        </h1>
      </div>

      <div className="relative flex w-[70%] mx-auto gap-10 z-10">
        <div>
          <img src={fetured} alt="Featured" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex flex-col justify-center space-y-3 text-white">
          <p>March 20, 2023</p>
          <h1 className="font-bold text-2xl">WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <Link className="mt-10">
            <button className="px-4 py-2 rounded-md border-b-4 border-black uppercase bg-white text-black hover:bg-gray-200 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
