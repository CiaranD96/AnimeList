import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AnimeCard({
  rank,
  image,
  id,
  title,
  studio,
  type,
  episodes,
  aired,
  score,
  duration,
}) {
  return (
    <div className='anime-card'>
      <NavLink exact='true' to={`/anime/${id}`}>
        <div className='anime-card-rank-div'>
          <span className='anime-card-rank'>{rank}</span>
        </div>
        <img src={image} alt='anime card' className='anime-card-image' />
        <div className='anime-card-desc'>
          <p className='anime-card-title'>{title}</p>
          <p>{score} / 10</p>
          <p>{studio}</p>
          <p>
            {type} - {episodes} episodes
          </p>
          <p>{aired}</p>
          <p>{duration}</p>
        </div>
      </NavLink>
    </div>
  );
}
