import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeCard from './Episodes';

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${params.id}/episodes`
        );
        const animeEpisodes = await response.json();
        setEpisodes(animeEpisodes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  return (
    <div className='episode-page'>
      {episodes.data &&
        episodes.data.length === 0 &&
        'Oops, we have no episode information yet!'}
      {episodes.data
        ? episodes.data.map((episode, index) => (
            <EpisodeCard
              key={episode.mal_id}
              number={index + 1}
              title={episode.title}
              aired={episode.aired}
              recap={episode.recap}
            />
          ))
        : 'Oops, we have no episode information yet!'}
    </div>
  );
}
