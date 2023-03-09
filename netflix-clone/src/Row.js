//shortcut - type rfce

import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  // use state - stores info untill refreshed
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition/variable
  // when the page loads this code runs
  useEffect(() => {
    // sends a request to the URL with our API key
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results); // Array of results 
      return request;
    }
    fetchData();

    // if bracket is blank, the code runs once.
    // to get async function to work, you need to include the variable thats outside the block below so it gets re-rendered
  }, [fetchUrl]);
  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_poster_large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
