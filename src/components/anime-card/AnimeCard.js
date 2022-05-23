import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AnimeCard({
  image,
  id,
  title,
  studio,
  type,
  episodes,
  aired,
  index,
}) {
  return (
    <div key={index} className='anime-card'>
      <NavLink exact='true' to={`/anime/${id}`}>
        <img src={image} alt='anime card' className='anime-card-image' />
        <div className='anime-card-desc'>
          <p className='anime-card-title'>{title}</p>
          <p>{studio}</p>
          <p>
            {type} - {episodes} episodes
          </p>
          <p>{aired}</p>
        </div>
      </NavLink>
    </div>
  );
}
