import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
      <div className="grid grid-cols-8">
        <img
          className="w-[118px] h-[104px] rounded-r-full rounded-bl-full col-span-2"
          src={image}
          alt={name}
        />
        <div className="col-span-4 space-y-2">
          <h1 className="uppercase text-2xl">{name}</h1>
          <p>{recipe}</p>
        </div>
        <p>{price}</p>
      </div>
  );
};

export default MenuItem;
