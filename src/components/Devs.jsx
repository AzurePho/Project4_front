// import { useState } from "react";
import axios from "axios";
import { API_URL } from "../consts";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function Games() {
  const { data: devsData, isSuccess } = useQuery("devs", () => {
    return axios.get(`${API_URL}/devs/`);
  });

  console.log(devsData);

  return (
    <div>
      <h1>Games Page</h1>
      {isSuccess &&
        devsData.data.map((dev) => (
          <div key={dev.id}>
            <h2>
              <Link to={`/dev/${dev.id}`}>{dev.name}</Link>
            </h2>
          </div>
        ))}
    </div>
  );
}

export default Games;
