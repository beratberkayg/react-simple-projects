import React from "react";

function Input({ value, type, id, onChange, placeholder, name }) {
  return (
    <input
      value={value}
      className="h-10 w-full border rounded-md p-2 outline-none mt-3 "
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
