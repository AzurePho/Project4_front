// import { useState } from "react";
import axios from "axios";
import { API_URL } from "../consts";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function Genres() {
  const { data: genresData, isSuccess } = useQuery("genres", () => {
    return axios.get(`${API_URL}/genres/`);
  });

  console.log(genresData);

  return (
    <div>
      <h1>Games Page</h1>
      {isSuccess &&
        genresData.data.map((genre) => (
          <div key={genre.id}>
            <h2>
              <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
            </h2>
          </div>
        ))}
    </div>
  );
}

export default Genres;
