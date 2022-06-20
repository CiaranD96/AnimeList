import React, { Fragment, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';

import SingleAnimeMain from '../../single-anime/SingleAnimeMain';
import SingleAnimeSection from '../../single-anime/SingleAnimeSection';
import ReviewPage from '../../tabs/reviews/ReviewPage';
import EpisodesPage from '../../tabs/episodes/EpisodesPage';
import CharactersPage from '../../tabs/characters/CharactersPage';

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

  return (
    <Fragment>
      {anime.data && (
        <div className='single-anime'>
          <SingleAnimeSection
            rank={anime.data.rank}
            image={anime.data.images.webp.large_image_url}
            studio={
              anime.data.studios[0]
                ? anime.data.studios[0].name
                : 'Unknown studio name'
            }
            aired={anime.data.aired.string}
            type={anime.data.type}
            episodes={anime.data.episodes}
            duration={anime.data.duration}
          />
          <main className='single-anime-main'>
            <h1 className='single-anime-title'>
              {anime.data.title}{' '}
              <span className='single-anime-score'>
                {anime.data.score} / 10
              </span>
            </h1>
            {anime.data.title_english && <h3>{anime.data.title_english}</h3>}
            <Tabs>
              <TabList>
                <Tab>About Anime</Tab>
                <Tab>Reviews</Tab>
                {anime.data.type === 'TV' ? <Tab>Episodes</Tab> : ''}
                <Tab>Characters</Tab>
              </TabList>

              <TabPanel>
                <SingleAnimeMain
                  title={anime.data.title}
                  rating={anime.data.rating}
                  trailer={anime.data.trailer.embed_url}
                  synopsis={anime.data.synopsis}
                />
              </TabPanel>
              <TabPanel>
                <ReviewPage />
              </TabPanel>
              <TabPanel>
                <EpisodesPage />
              </TabPanel>
              <TabPanel>
                <CharactersPage />
              </TabPanel>
            </Tabs>
          </main>
        </div>
      )}
    </Fragment>
  );
}
