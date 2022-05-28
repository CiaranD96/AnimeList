import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimeCard from '../../anime-card/AnimeCard';

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${params.name}`
        );
        const anime = await response.json();
        setSearchResults(anime);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  return (
    <Fragment>
      <h1 className='page-title'>
        Search Results For: <span className='search-result-name'></span>
        {params.name}
      </h1>
      <div className='search-results anime-grid'>
        {searchResults.data &&
          searchResults.data.map((result, index) => (
            <AnimeCard
              key={index}
              rank={result.rank}
              image={result.images.webp.image_url}
              id={result.mal_id}
              title={result.title}
              score={result.score}
              // studio={result.studios[0].name}
              type={result.type}
              episodes={result.episodes}
              aired={result.aired.string}
              duration={result.duration}
            />
          ))}
      </div>
    </Fragment>
  );
}
