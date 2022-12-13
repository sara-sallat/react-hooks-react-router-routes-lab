import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          {`Title: ${movie.title}, Time: ${movie.time}`}
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={genre + index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;