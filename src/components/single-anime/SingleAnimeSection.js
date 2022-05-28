export default function SingleAnimeSection({
  rank,
  image,
  studio,
  aired,
  type,
  episodes,
  duration,
}) {
  return (
    <section className='single-anime-section'>
      <div className='single-anime-card-rank-div'>
        <span className='single-anime-card-rank'>{rank}</span>
      </div>
      <img src={image} alt='anime' className='single-anime-image' />
      <p>{studio}</p>
      <p>Aired: {aired}</p>
      <p>
        {type} - {episodes} episodes
      </p>
      <p>{duration}</p>
    </section>
  );
}
