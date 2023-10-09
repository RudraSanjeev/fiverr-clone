import React from "react";
import "./featured.scss";
import man from "../../../public/img/man.png";
import search from "../../../public/img/search.png";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={search} alt="" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
