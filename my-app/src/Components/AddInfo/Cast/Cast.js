import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { getActors } from "../../../services/MoviesApi";

const Cast = () => {

    const [cast, setCast] = useState(null)

    const {movieId} = useParams();

    useEffect(() => {
        getActors(movieId).then(({ cast }) => setCast(cast));
    }, [movieId])


    return (
        <ul>

        </ul>
    )
}

export default Cast;