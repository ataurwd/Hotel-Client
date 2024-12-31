import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import coverBg from "../assets/shop/banner2.jpg";
import Cover from "../components/Shared/Cover";
import useMenu from "../Hooks/useMenu";
import Card from "../components/Shared/Card";
import { driver } from "localforage";

const Order = () => {
  const [menu] = useMenu();
  const drink = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Cover
        bgimg={coverBg}
        heading={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <div className="my-5">
        <Tabs
          // defaultIndex={activeTab}
          // onSelect={(index) => setActiveTab(index)}
          className="react-tabs"
        >
          {/* Tab Titles */}
          <TabList className="flex justify-center">
            <Tab
              className={`px-4 py-2 cursor-pointer transition-colors duration-300`}
              selectedClassName="text-primary border-b-4 focus:outline-none border-primary font-semibold"
            >
              SALAD
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer transition-colors duration-300`}
              selectedClassName="text-primary border-b-4 focus:outline-none border-primary font-semibold"
            >
              PIZZA
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer transition-colors duration-300`}
              selectedClassName="text-primary border-b-4 focus:outline-none border-primary font-semibold"
            >
              SOUPS
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer transition-colors duration-300`}
              selectedClassName="text-primary border-b-4 focus:outline-none border-primary font-semibold"
            >
              DESSERTS
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer transition-colors duration-300`}
              selectedClassName="text-primary border-b-4 focus:outline-none border-primary font-semibold"
            >
              DRINKS
            </Tab>
          </TabList>

          {/* Tab Content */}
          <TabPanel>
            <div className=" px-20 grid grid-cols-3 gap-10 my-10">
              {salad.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" px-20 grid grid-cols-3 gap-10 my-10">
              {pizza.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className=" px-20 grid grid-cols-3 gap-10 my-10">
              {soup.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className=" px-20 grid grid-cols-3 gap-10 my-10">
              {dessert.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div className=" px-20 grid grid-cols-3 gap-10 my-10">
              {drink.map((item) => (
                <Card key={item._id} item={item}></Card>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
