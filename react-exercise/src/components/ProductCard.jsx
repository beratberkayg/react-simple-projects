import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

function ProductCard({ dt }) {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  const updateFunc = () => {
    dispatch(modalFunc);
    dispatch(updateDataFunc(dt));
  };

  return (
    <div className=" w-[200px] h-[200px] relative m-2 rounded-md">
      <img className="w-full h-full  rounded-md" src={dt?.url} />
      <div className=" absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold text-center">{dt?.name}</div>
        <div className="text-center"> {dt?.price} TL </div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)}>
        <BsThreeDots
          color="white"
          size={24}
          className="absolute top-0 right-2 cursor-pointer"
        />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
