import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { getActors } from "../../../services/MoviesApi";

const Cast = () => {

    const [cast, setCast] = useState(null)

    const {movieId} = useParams();

    useEffect(() => {
        getActors(movieId).then( cast  => setCast(cast));
        
    }, [movieId])


    return (
        cast && (
            <ul>
            {cast.map(actor => (
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} alt="actor" width="200"/>
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </li>
            ))}
        </ul>
        )
    )
}

export default Cast;