import { placeholder } from "@babel/types";
import React from "react";

function Input({ type, id, onChange, placeholder }) {
  return (
    <input
      className="h-10 w-full border rounded-md p-2"
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
