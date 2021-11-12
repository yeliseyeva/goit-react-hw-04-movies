import { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router";
import { getMovieDetails } from "../../services/MoviesApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {

    const [film, setFilm] = useState(null);

    const {movieId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    // const location = useRef(useLocation()?.state?.from ?? '/');

    // console.log("LOCATION" , location);

    useEffect( () => {
        getMovieDetails(movieId).then(movie => setFilm(movie));
    }, [movieId])

    if (film === null) {
        return <h1>Данных по фильму нет</h1>
    }

    const handleGoBack = () => {
        console.log(location);
        // navigate(location?.state?.from ?? '/');
        // console.log(location);
    }

    return (
        <>
            <button type="button" onClick={handleGoBack}>Go back</button>
            <h1>{film.title}</h1>
            <img src={`${BASE_URL}${film.backdrop_path}`} alt=""/>
            
        </>


    )
}

export default MovieDetailsPage