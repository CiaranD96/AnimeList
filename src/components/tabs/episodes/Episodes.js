import React from 'react';

export default function EpisodeCard({ number, title, aired, recap }) {
  const date = new Date(aired);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDate = `${day}/${month}/${year}`;
  return (
    <div className='episode-card'>
      <h3 className='episode-title'>
        {number}. {title}
      </h3>
      <p>Aired: {fullDate}</p>
      <p>Recap: {recap ? 'Yes' : 'No'}</p>
    </div>
  );
}
