import React, { Fragment, useEffect, useState } from 'react';
import AnimeCard from '../../anime-card/AnimeCard';

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
            <AnimeCard anime={anime} index={index} />
          ))}
      </div>
    </Fragment>
  );
}
