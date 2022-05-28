import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Reviews from './Reviews';

export default function ReviewPage() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${params.id}/reviews`
        );
        const animeReviews = await response.json();
        setReviews(animeReviews);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  return (
    <div>
      {reviews.data &&
        reviews.data.map((review) => (
          <Reviews
            date={review.date}
            episodesWatched={review.episodes_watched}
            review={review.review}
            score={review.scores.overall}
            username={review.user.username}
            userImage={review.user.images.webp.image_url}
            votes={review.votes}
          />
        ))}
    </div>
  );
}
