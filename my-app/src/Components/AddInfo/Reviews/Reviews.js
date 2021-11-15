import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getReviews } from "../../../services/MoviesApi";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then((review) => setReviews(review));
  }, [movieId]);

  return reviews ? (
    <ul>
      {reviews.map(review => (
          <li key={review.id}>
                <b>Author: {review.author}</b>
                <p>{review.content}</p>
            </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
