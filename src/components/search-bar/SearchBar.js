import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [animeName, setAnimeName] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (animeName !== '') {
      navigate(`/search-results/${animeName}`);
    }
  };

  const handleAnimeName = (event) => {
    setAnimeName(event.target.value);
  };

  return (
    <div className='search-bar-container'>
      <form className='search-bar-form' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter anime name...'
          className='search-bar-input'
          onChange={handleAnimeName}
        />
        <button className='search-bar-button'>Go</button>
      </form>
    </div>
  );
}
