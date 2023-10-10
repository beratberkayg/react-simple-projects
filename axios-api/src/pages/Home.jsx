import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";

function Home() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setAllData(data);
      setLoading(false);
    };
    getData();
  }, []);

  console.log(allData);

  return (
    <div className="Home">
      {allData.map((dt, index) => {
        return <div className="card" key={index}></div>;
      })}
    </div>
  );
}

export default Home;
