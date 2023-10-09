import { useNavigate } from "react-router-dom";

export const Data = [
  {
    id: 1,
    name: "Berat Berkay",
    surname: "Gökdemir",
    img: "https://media.licdn.com/dms/image/D4D03AQFlHNJMfz2O1w/profile-displayphoto-shrink_800_800/0/1682802966671?e=2147483647&v=beta&t=s36c66gJBxPn5l4MAjFgTmp-jAkVjgWvqrzhHTKjhtE",
  },
  {
    id: 2,
    name: "Hasan Hüseyin",
    surname: "Köse",
    img: "https://yucelborufenlisesi.meb.k12.tr/meb_iys_dosyalar/41/02/750301/resimler/2021_06/10134136_hk.jpg",
  },
  {
    id: 3,
    name: "Yunus Emre",
    surname: "Akdemir",
    img: "https://contents.mediadecathlon.com/p2218125/k$c3b4c0749e70b67c2b36c99316449d9d/sq/8602698.jpg?format=auto&f=800x0",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      {Data.map((dt, i) => {
        return (
          <div
            onClick={() => navigate(`detail/${dt.id}`)}
            className="card"
            key={i}
          >
            <img src={dt.img} />
            <h2>{dt.name}</h2>
            <h3>{dt.surname}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
