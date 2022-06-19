import React from 'react';

export default function Characters({ name, image, role, actors }) {
  return (
    <div className='character-card'>
      <div className='character-card-image-container'>
        <img src={image} alt={name} />
      </div>
      <div className='character-card-info-container'>
        <h3 className='character-card-character-name'>{name}</h3>
        <p className='character-card-character-role'>Role: {role}</p>
        <div className='character-card-voice-actors-container'>
          {actors &&
            actors.map((actor) => (
              <p>
                {actor.language}: {actor.person.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
