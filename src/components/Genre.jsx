// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { API_URL } from "../consts";
// import { useQuery } from "react-query";

// function Genre() {
//   let { id } = useParams();
//   const { data: genreData, isSuccess } = useQuery("genre", () => {
//     return axios.get(`${API_URL}/genres/${id}/`);
//   });

//   console.log(genreData);

//     return (
//       <div className="page">{isSuccess && <h1>{gameData.data.title}</h1>}</div>
//     );
// }

// export default Genre;
