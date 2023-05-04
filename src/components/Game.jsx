import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../consts";
import { useQuery } from "react-query";

function Game() {
  const { id } = useParams();
  const { data: gameData, isSuccess } = useQuery("game", () => {
    return axios.get(`${API_URL}/games/${id}/`);
  });

  console.log(gameData);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.sub);
    }
  }, []);

  const handleEdit = () => {
    window.location.href = `/game/${id}/editgame`;
  };

  const handleDelete = () => {
    axios.delete(`${API_URL}/games/${id}/`).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="page">
      {isSuccess && (
        <div>
          <h1>{gameData.data.title}</h1>
          <h2>Developer: {gameData.data.dev.name}</h2>
          {gameData.data.genres.map((g) => (
            <h2 key={g.id}>Genre: {g.name}</h2>
          ))}
          {localStorage.getItem("token") &&
            (userId === gameData.data.owner.username ||
              gameData.data.owner.username === "admin") && (
              <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
        </div>
      )}
    </div>
  );
}

export default Game;
