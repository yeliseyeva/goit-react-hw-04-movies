import { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/MoviesApi";
import { useLocation, useNavigate, useParams, Routes, Route } from "react-router-dom";
import Cast from "../../Components/AddInfo/Cast/Cast";
import AddInfo from "../../Components/AddInfo/AddInfo";

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {

    const [film, setFilm] = useState(null);

    const {movieId} = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect( () => {
        getMovieDetails(movieId).then(movie => setFilm(movie));
    }, [movieId])

    if (film === null) {
        return <h1>Данных по фильму нет</h1>
    }
    console.log(film);

    const handleGoBack = () => {
        navigate(location?.state?.from);
    }

    return (
        <>
            <button type="button" onClick={handleGoBack}>Go back</button>
            <h1>{film.title}</h1>
            <img src={`${BASE_URL}${film.backdrop_path}`} alt=""/>
            <p>
                User score: {Math.round(film.popularity)}%
            </p>
            <h2>Overview</h2>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            <p>{film.genres.map(gen => gen.name).join(', ')}</p>
            <AddInfo />

            <Routes>
                <Route path="cast" element={<Cast/>}/>
            </Routes>

        </>




    )
}

export default MovieDetailsPage