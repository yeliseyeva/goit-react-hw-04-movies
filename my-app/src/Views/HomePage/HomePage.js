import MoviesList from "../../Components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import getTrandingMovies from "../../services/MoviesApi";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrandingMovies().then(films => setMovies(films.results))
        
    })
    return (
        <>
            <h1>HomePage</h1>

            <MoviesList movies={movies}/>
        </>
    )
}

export default HomePage