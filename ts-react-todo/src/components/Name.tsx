import React from "react";

type Props = {
  name: string;
  age: number;
};

const Name: React.FC<Props> = ({ name, age }) => {
  return (
    <div className="uppercase text-2xl">
      {name} {age}
    </div>
  );
};

export default Name;
