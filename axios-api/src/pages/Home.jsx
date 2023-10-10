import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="Home">
      {allData.map((dt, index) => {
        return (
          <div
            onClick={() => navigate(`detail/${dt.id}`)}
            className="card"
            key={index}
          >
            <p>{dt.title}</p>
            <img src={dt.image} alt="" />
            <p>Price : {dt.price} $</p>
            <p>{dt.description}</p>
            <p>{}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
