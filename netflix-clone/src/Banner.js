import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import base_url from "./Row";
import "./Banner.css";

//const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  // a snippet of code which runs based on a specific condition/variable
  // when the page loads this code runs
  useEffect(() => {
    // sends a request to the URL with our API key
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      ); // randomly select one movie
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        //  backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* description  */}
        <h2 className="banner_description">
            {truncate(movie?.overview, 200)}
        </h2>

        {/* two buttons  */}
        <div className="banner_buttons">
            <button className="banner_button play_button">Play</button>
            <button className="banner_button info_button">More info</button>
        </div>
        
      </div>
    </header>
  );
}

export default Banner;
