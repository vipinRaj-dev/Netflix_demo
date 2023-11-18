import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Cards from "./Cards";
import {
  API_KEY,
  ORIGINALS_URL,
  HORROR_URL,
  ACTION_URL,
  COMEDY_URL,
} from "../Constants";
import AxiosInstance from "./Axios";

function MainScreen() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    AxiosInstance.get(
      `trending/all/week?api_key=${API_KEY}&language=en-US`
    ).then((res) => {
      setMovie(res.data.results[0]);
    });
  }, []);
  return (
    <div>
      <main>
        <div className=" bg-cover h-screen" style={{backgroundImage:'url(https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg)'}}>
          <div className="w-96 h-96 relative">
            <div className="absolute top-2/4 left-16">
              <h4 className="text-gray-700 text-7xl mb-8">
                {movie ? movie.title : ""}
              </h4>
              <p className="text-red-950"> {movie ? movie.overview : ""}</p>
            </div>
            <div className="absolute top-96 left-24">
              <div className="absolute z-10 flex">
              <button className="bg-red-500 w-24 mx-4 hover:bg-black rounded-md p-1 hover:text-white">
                Play
              </button>
              <button className="bg-slate-800  hover:bg-red-600 rounded-md w-24">
                List
              </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white w-12 linear"
          style={{
            position: "absolute",
            height: "665px",
            top: "104px",
            width: "100%",
          }}
        ></div>
      </main>
      <Cards title="Netflix Originals" url={ORIGINALS_URL} />
      <Cards title="HORROR" url={HORROR_URL} />
      <Cards title="ACTION" url={ACTION_URL} />
      <Cards title="DOCUMENTART" url={COMEDY_URL} />
    </div>
  );
}

export default MainScreen;
