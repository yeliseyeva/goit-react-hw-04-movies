import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMoviesByQuery } from "../../services/MoviesApi";
import MoviesList from "../../Components/MoviesList/MoviesList";

const MoviesPage = () => {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        setQuery(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        getMoviesByQuery(query).then(res => setMovies(res));

        navigate({
            ...location,
            search: `query=${query}`
        })

    }

    useEffect(() => {

        const locationValue = location.search.split("=")[1]

        console.log();

        if (location.search !== '') {
            getMoviesByQuery(locationValue).then(res => setMovies(res));
        }

    }, [location])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="query" value={query}/>
                <button type="submit">Search</button>
            </form>

            <MoviesList movies={movies}/>
        </div>

        
    )
}

export default MoviesPage