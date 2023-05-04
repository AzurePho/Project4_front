import axios from "axios";
import { API_URL } from "../consts";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function Games() {
  const { data: gamesData, isSuccess } = useQuery("games", () => {
    return axios.get(`${API_URL}/games/`);
  });

  console.log(gamesData);

  return (
    <div>
      <h1>Games Page</h1>
      {localStorage.getItem("token") && (
        <button onClick={() => (window.location.href = "/addgame")}>
          Add Game
        </button>
      )}
      {isSuccess &&
        gamesData.data.map((game) => (
          <div key={game.id}>
            <h2>
              <Link to={`/game/${game.id}`}>{game.title}</Link>
            </h2>
          </div>
        ))}
    </div>
  );
}

export default Games;
