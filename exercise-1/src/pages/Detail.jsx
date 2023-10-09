import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Home, { Data } from "./Home";

function Detail() {
  const { id } = useParams();
  const [getData, setGetData] = useState(null);
  const navigate = useNavigate();
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
      <button onClick={() => navigate(`/`)}>Go Home</button>
    </div>
  );
}

export default Detail;
