import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "./Home";

function Detail() {
  const { id } = useParams();
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    if (id) {
      setGetData(Data.find((dt) => dt.id == id));
    }
  }, [id]);

  return (
    <div className="Detail">
      <img src={getData?.img} />
      <h2>{getData?.name}</h2>
      <h3>{getData?.surname}</h3>
    </div>
  );
}

export default Detail;
