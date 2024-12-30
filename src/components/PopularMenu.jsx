import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../Hooks/useMenu";

const PopularMenu = () => {
  // const [data, setData] = useState([]);

  // // Fetching data from an API
  // useEffect(() => {
  //   axios.get("menu.json").then((res) => {
  //     const popularItem = res.data.filter(
  //       (item) => item.category === "popular"
  //     );
  //     setData(popularItem);
  //   });
  // }, []);

  const [menu] = useMenu();
  const data = menu.filter((item) => item.category === "popular");
  return (
    <div className="my-16">
      <div className="text-center my-20 space-y-5">
        <p className="text-secondary">---Check it out---</p>
        <h1 className="text-5xl font-interFont border-t-gray-200 border-t-4 border-b-4 p-4 w-1/2 mx-auto">
          FROM OUR MENU
        </h1>
      </div>

      <div className="grid grid-cols-2 px-28 gap-5">
        {data.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className="grid place-items-center mt-10">
        <button className="px-4 py-2 rounded-md border-b-4 border-black">View Full Menu</button>
      </Link>
    </div>
  );
};

export default PopularMenu;
