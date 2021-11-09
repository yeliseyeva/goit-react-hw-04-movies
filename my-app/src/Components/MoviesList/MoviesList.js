import { Link } from "react-router-dom";
import s from "./MoviesList.module.css";

const BASE_URL = 'https://image.tmdb.org/t/p/w500';


const MoviesList = ({movies}) => {
    return(
        <ul className={s.moviesList}>
            {movies.map(movie => {
                return (
                    <li key={movie.id} className={s.movieItem}>
                        <Link to={`/movies/${movie.id}`}>
                            <img src={`${BASE_URL}${movie.poster_path}`} alt="" width="200"/> 
                        </Link>  
                    </li>
                )
            })}
        </ul>
    )
}

export default MoviesList;