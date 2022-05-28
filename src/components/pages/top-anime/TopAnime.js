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

  return (
    <Fragment>
      <h1 className='page-title'>Top Anime List</h1>
      <div className='anime-grid'>
        {topAnimeList.data &&
          topAnimeList.data.map((anime, index) => (
            <AnimeCard
              key={index}
              rank={anime.rank}
              image={anime.images.webp.image_url}
              id={anime.mal_id}
              title={anime.title}
              score={anime.score}
              studio={anime.studios[0].name}
              type={anime.type}
              episodes={anime.episodes}
              aired={anime.aired.string}
              duration={anime.duration}
            />
          ))}
      </div>
    </Fragment>
  );
}
