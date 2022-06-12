import React from 'react';

export default function Reviews({
  date,
  episodesWatched,
  review,
  score,
  username,
  userImage,
  votes,
}) {
  const formattedDate = new Date(date);
  const dateDay = formattedDate.getDate();
  const dateMonth = formattedDate.getMonth() + 1;
  const dateYear = formattedDate.getFullYear();
  const dateTime = formattedDate.toLocaleString('en-GB', {
    timeZone: 'GB',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className='review'>
      <div className='review-user-picture-div'>
        <img
          src={userImage}
          alt='user profile'
          className='review-user-picture'
        />
      </div>
      <div className='review-body'>
        <p>
          <span className='review-username'>{username}</span>{' '}
          {`${dateDay}/${dateMonth}/${dateYear}, ${dateTime}`}
        </p>
        <p>Overall Score: {score}</p>
        <p>Episodes Watched: {episodesWatched}</p>
        <p>{review}</p>
      </div>
    </div>
  );
}
