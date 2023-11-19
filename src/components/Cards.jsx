import React, { useEffect, useState } from "react";
import Axiosinstance from "./Axios";
import Youtube from "react-youtube";

function Cards(props) {
  const [cardImages, setCardImages] = useState([]);
  const [urlId, setUrlId] = useState("");

  let url = props.url;
  useEffect(() => {
    Axiosinstance.get(url)
      .then((res) => {
        setCardImages(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (id) => {
    console.log(id);
    Axiosinstance.get(
      `movie/${id}/videos?api_key=b1e8475315e4519e6a3f2d11108671f4&language=en-US`
    )
      .then((res) => {
        console.log(res);
        if (res.data.results.length !== 0) {
          setUrlId(res.data.results[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-slate-800 overflow-y-hidden">
      <h2 className="ml-5 text-2xl text-white mt-5">{props.title}</h2>
      <div className="flex p-2 overflow-x-scroll  hideScroll ml-5">
        {cardImages.map((itm) => {
          return (
            <img
              className="images"
              key={itm.id}
              style={{
                minWidth: "400px",
                height: "200px",
                marginRight: "10px",
                marginLeft: "20",
              }}
              src={`https://image.tmdb.org/t/p/original${itm.backdrop_path}`}
              alt=""
              onClick={() => handleClick(itm.id)}
            />
          );
        })}
      </div>
      {urlId && <Youtube videoId={urlId.key} opt={opts} />}
    </div>
  );
}

export default Cards;
