import { useState } from "react";
import axios from "axios";
import { API_URL } from "../consts";
import { useQuery } from "react-query";

function AddGameForm() {
  const { data: genresData, isSuccess: isGenreSucess } = useQuery(
    "genres",
    () => {
      return axios.get(`${API_URL}/genres/`);
    }
  );
  const { data: devsData, isSuccess: isDevSuccess } = useQuery("devs", () => {
    return axios.get(`${API_URL}/devs/`);
  });
  const [formData, setFormData] = useState({
    title: "",
    cover_image: "",
    dev: "",
    genres: [],
  });
  //   console.log("Genres data:", genresData);
  //   console.log("Genres isSuccess:", isGenreSucess);
  //   console.log("Devs data:", devsData);
  //   console.log("Devs isSuccess:", isDevSuccess);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.name === "dev" || e.target.value === "genres"
        ? parseInt(e.target.value)
        : e.target.value;
    console.log(value);
    if (e.target.name === "genres") {
      setFormData({
        ...formData,
        [name]: [...formData[name], parseInt(value)],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData);
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();

    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${API_URL}/games/`, formData, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn) {
    return <p>Please log in to add a game.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover_image">Cover Image:</label>
        <input
          type="text"
          id="cover_image"
          name="cover_image"
          value={formData.cover_image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dev">Developer:</label>
        <select
          id="dev"
          name="dev"
          value={formData.dev}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a developer --</option>
          {isDevSuccess &&
            devsData.data.map((dev) => (
              <option key={dev.id} value={dev.id}>
                {dev.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="genres">Genre:</label>
        <select
          id="genres"
          name="genres"
          value={formData.genres}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a genre --</option>
          {isGenreSucess &&
            genresData.data.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
        </select>
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
}

export default AddGameForm;
