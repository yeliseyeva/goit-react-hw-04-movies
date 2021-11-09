import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMovieDetails } from "../../services/MoviesApi";

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {

    const [film, setFilm] = useState(null);

    const {movieId} = useParams();

    useEffect( () => {
        getMovieDetails(movieId).then(movie => setFilm(movie));
    }, [movieId])

    if (film === null) {
        return <h1>Данных по фильму нет</h1>
    }

    return (
        <>
            <h1>{film.title}</h1>
            <img src={`${BASE_URL}${film.backdrop_path}`}/>
            
        </>


    )
}

export default MovieDetailsPage