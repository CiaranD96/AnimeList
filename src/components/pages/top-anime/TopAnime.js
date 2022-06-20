import React, { Fragment, useEffect, useState } from 'react';
import AnimeCard from '../../anime-card/AnimeCard';

export default function TopAnime() {
  const [topAnimeList, setTopAnimeList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/top/anime?page=${pageNumber}`
        );
        const topAnime = await response.json();
        setTopAnimeList(topAnime);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pageNumber]);

  const handlePageButton = (increment) => {
    const pageMax = topAnimeList.pagination.last_visible_page;
    if (increment === 'previous' && pageNumber !== 1)
      setPageNumber(pageNumber - 1);
    if (increment === 'next' && pageNumber !== pageMax)
      setPageNumber(pageNumber + 1);
  };

  return (
    <Fragment>
      <h1 className='page-title'>Top Anime List</h1>
      <div className='anime-grid'>
        {topAnimeList.data &&
          topAnimeList.data.map((anime, index) => (
            <AnimeCard
              key={index}
              rank={anime.rank ? anime.rank : ''}
              image={
                anime.images.webp.image_url ? anime.images.webp.image_url : ''
              }
              id={anime.mal_id ? anime.mal_id : ''}
              title={anime.title ? anime.title : ''}
              score={anime.score ? anime.score : ''}
              studio={
                anime.studios[0] ? anime.studios[0].name : 'Unknown studio name'
              }
              type={anime.type ? anime.type : ''}
              episodes={anime.episodes ? anime.episodes : ''}
              aired={anime.aired.string ? anime.aired.string : ''}
              duration={anime.duration ? anime.duration : ''}
            />
          ))}
      </div>
      {topAnimeList.data && (
        <div className='page-selection-container'>
          <button
            className='page-selection-button previous-button'
            onClick={() => {
              handlePageButton('previous');
            }}
          >
            Previous Page
          </button>
          <p>
            Page: {pageNumber} - {topAnimeList.pagination.last_visible_page}
          </p>
          <button
            className='page-selection-button next-button'
            onClick={() => {
              handlePageButton('next');
            }}
          >
            Next Page
          </button>
        </div>
      )}
    </Fragment>
  );
}
