import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Characters from './Characters';

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${params.id}/characters`
        );
        const animeCharacters = await response.json();
        setCharacters(animeCharacters);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);

  return (
    <div className='characters-page'>
      {characters.data
        ? characters.data.map((character, index) => (
            <Characters
              key={index}
              name={character.character.name}
              image={character.character.images.webp.image_url}
              role={character.role}
              actors={character.voice_actors}
            />
          ))
        : 'Oops, we have no character information yet!'}
    </div>
  );
}
