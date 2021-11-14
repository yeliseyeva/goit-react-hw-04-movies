import { Link } from "react-router-dom";
import s from "./MoviesList.module.css";
import { useLocation } from "react-router-dom";

const BASE_URL = 'https://image.tmdb.org/t/p/w500';


const MoviesList = ({ movies }) => {
    const location = useLocation();
    // console.log("LIST" , location);
    return (
      <ul className={s.moviesList}>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className={s.movieItem}>
              <Link
                to={`/movies/${movie.id}`} state={{ from: location }}
              >
                <img src={`${BASE_URL}${movie.poster_path}`} alt="" width="200" />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

export default MoviesList;