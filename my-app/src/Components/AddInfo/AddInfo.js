import { NavLink } from "react-router-dom"

const AddInfo = () => {

    return (
        <>
            <p>Additional information</p>

            <ul>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
        </>
    )
}

export default AddInfo;