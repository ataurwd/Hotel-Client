import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../components/Shared/Cover";
import bannerImg from "../assets/menu/banner3.jpg";
import useMenu from "../Hooks/useMenu";
import Heading from "./../components/Shared/Heading";
import MenuItem from "../components/MenuItem";

// import images
import pizzaBg from '../assets/menu/pizza-bg.jpg'
import desertBg from '../assets/menu/dessert-bg.jpeg'
import saladBg from '../assets/menu/salad-bg.jpg'
import soupBg from '../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | MENU</title>
      </Helmet>
      <Cover
        bgimg={bannerImg}
        heading={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>

          {/* for offered in offered */}
      <section className="my-10">
        <Heading heading={"TODAY OFFER"} text={"---Do not miss---"}></Heading>
        <div className="grid grid-cols-2 px-28 gap-5">
          {offered.map((item) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div>
      </section>

      {/* DESSERTS */}
      <section className="my-10">
        <Cover
          bgimg={desertBg}
          heading={"DESSERTS"}
          description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></Cover>
        <div className="grid grid-cols-2 px-28 gap-5 py-10">
          {dessert.slice(0, 6).map((item) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div>
          </section>
          
      {/* PIZZA */}
      <section className="my-10">
        <Cover
          bgimg={pizzaBg}
          heading={"PIZZA"}
          description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></Cover>
        <div className="grid grid-cols-2 px-28 gap-5 py-10">
          {pizza.slice(0, 6).map((item) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div>
      </section>
          
      {/* SALADS */}
      <section className="my-10">
        <Cover
          bgimg={saladBg}
          heading={"SALADS"}
          description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></Cover>
        <div className="grid grid-cols-2 px-28 gap-5 py-10">
          {salad.slice(0, 6).map((item) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div>
      </section>
          
      {/* SOUPS */}
      <section className="my-10">
        <Cover
          bgimg={soupBg}
          heading={"SALADS"}
          description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        ></Cover>
        <div className="grid grid-cols-2 px-28 gap-5 py-10">
          {soup.slice(0, 6).map((item) => (
            <MenuItem item={item}></MenuItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
