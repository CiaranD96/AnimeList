import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Anime() {
  const [anime, setAnime] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${params.id}`
        );
        const singleAnime = await response.json();
        setAnime(singleAnime);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  console.log(anime);

  return (
    <Fragment>
      {anime.data && (
        <div className='single-anime'>
          <div className='single-anime-image'>
            <img
              src={anime.data.images.webp.large_image_url}
              alt='anime'
              className='anime-image'
            />
          </div>
          <div className='single-anime-desc'>
            <h1 className='single-anime-title'>{anime.data.title_english}</h1>
            <p>{anime.data.synopsis}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
}
