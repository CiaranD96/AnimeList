import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AnimeCard({ anime, index }) {
  return (
    <div key={index} className='anime-card'>
      <NavLink exact='true' to={`/anime/${anime.mal_id}`}>
        <img
          src={anime.images.webp.image_url}
          alt='anime card'
          className='anime-card-image'
        />
        <div className='anime-card-desc'>
          <p className='anime-card-title'>{anime.title_english}</p>
          <p>{anime.studios[0].name}</p>
          <p>
            {anime.type} - {anime.episodes} episodes
          </p>
          <p>{anime.aired.string}</p>
        </div>
      </NavLink>
    </div>
  );
}
