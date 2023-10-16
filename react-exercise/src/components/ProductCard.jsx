import React from "react";
import { BsThreeDots } from "react-icons/bs";

function ProductCard({ dt }) {
  return (
    <div className=" w-[200px] h-[200px] relative m-2 rounded-md">
      <img className="w-full h-full  rounded-md" src={dt?.url} />
      <div className=" absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold text-center">{dt?.name}</div>
        <div>{dt?.price} TL </div>
      </div>
      <div>
        <BsThreeDots color="white" />
      </div>
    </div>
  );
}

export default ProductCard;
