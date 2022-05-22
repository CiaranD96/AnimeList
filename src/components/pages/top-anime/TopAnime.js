import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function TopAnime() {
  const [topAnimeList, setTopAnimeList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime');
        const topAnime = await response.json();
        setTopAnimeList(topAnime);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(topAnimeList);

  return (
    <Fragment>
      <h1 className='page-title'>Top Anime List</h1>
      <div className='anime-grid'>
        {topAnimeList.data &&
          topAnimeList.data.map((anime, index) => (
            <div key={index} className='anime-card'>
              <NavLink exact='true' to={`/anime/${anime.mal_id}`}>
                <img
                  src={anime.images.webp.image_url}
                  alt='anime card'
                  className='anime-card-image'
                />
                <div className='anime-card-desc'>
                  <p className='anime-card-title'>{anime.title}</p>
                  <p>{anime.studios[0].name}</p>
                  <p>
                    {anime.type} {anime.episodes}
                  </p>
                  <p>{anime.aired.string}</p>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </Fragment>
  );
}
