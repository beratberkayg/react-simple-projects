import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singleData, setSingleData] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSingleData(data);
    };
    getData();
  }, [id]);

  return (
    <div>
      <div className="card">
        <p>{singleData?.title}</p>
        <img src={singleData?.image} alt="" />
        <p>Price : {singleData?.price} $</p>
        <p>{singleData?.description}</p>
        <button onClick={() => navigate("/")}>Go Home Page</button>
      </div>
    </div>
  );
}

export default Detail;
