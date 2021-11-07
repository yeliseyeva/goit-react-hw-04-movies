import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./Views/HomePage/HomePage";
import MoviesPage from "./Views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Views/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>}/>
        {/* <Route path="/movies/:movieId/cast" element={<Cast/>}/>
        <Route path="/movies/:movieId/reviews" element={<Reviews/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
