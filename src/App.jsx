import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import GamesPage from "./pages/GamesPage";
import GenresPage from "./pages/GenresPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import AddGamePage from "./pages/AddGamePage";
// import GenrePage from "./pages/GenrePage";
import DevsPage from "./pages/DevsPage";
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  let params = useParams();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Games" element={<GamesPage />} />
          <Route path="/Game/:id" element={<GamePage params={params} />} />
          <Route path="/Game/:id" element={<GamePage params={params} />} />
          <Route path="/Genres" element={<GenresPage />} />
          {/* <Route path="/Genre/:id" element={<GenrePage params={params} />} /> */}
          <Route path="/Devs" element={<DevsPage />} />
          {/* <Route path="/Dev/:id" element={<DevPage params={params} />} /> */}
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/AddGame" element={<AddGamePage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
