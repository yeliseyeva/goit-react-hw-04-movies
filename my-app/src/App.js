import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navigation from "./Components/Navigation/Navigation";


const HomePage = lazy( () => 
  import( "./Views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
)

const MovieDetailsPage = lazy( () =>
  import("./Views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */),
);
const MoviesPage = lazy( () =>
  import("./Views/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */),
);

function App() {
  return (
    <div className="App">

      <Navigation />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
