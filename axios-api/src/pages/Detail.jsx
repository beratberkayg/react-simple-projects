import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Detail() {
  const { id } = useParams();

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

  return <div>Detail</div>;
}

export default Detail;
