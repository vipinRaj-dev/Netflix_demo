import React from "react";
import "../App.css";
import MainScreen from "./MainScreen";

function Home() {
  return (
    <div>
      <nav>
        <div className="flex p-7 justify-between bg-slate-800 text-red-300">
          <img
            className="w-24 h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <ul className="flex gap-10">
            <li>Home</li>
            <li>Tv shows</li>
            <li>Movies</li>
            <li>My list</li>
          </ul>
          <div>
            <i className="fa-solid fa-magnifying-glass mx-5"></i>
            <i className="fa-solid fa-bell"></i>
          </div>
        </div>
      </nav>
      <MainScreen/>
    </div>
  );
}

export default Home;
