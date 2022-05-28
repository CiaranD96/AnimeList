import React, { Fragment } from 'react';

export default function SingleAnimeMain({ title, rating, trailer, synopsis }) {
  return (
    <Fragment>
      <p>{rating}</p>
      {trailer && (
        <div className='single-anime-trailer'>
          <iframe
            title={title}
            src={`${trailer}?autoplay=0`}
            frameborder='0'
            height='415'
            width='620'
          ></iframe>
        </div>
      )}
      <p>{synopsis}</p>
    </Fragment>
  );
}
