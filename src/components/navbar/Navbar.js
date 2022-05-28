import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink
            exact='true'
            to='/'
            className='nav-link'
            activeclassname='active'
          >
            <span className='link-text'>Home</span>
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            exact='true'
            to='/top'
            className='nav-link'
            activeclassname='active'
          >
            <span className='link-text'>Top Anime</span>
          </NavLink>
        </li>

        <li className='nav-item'>
          <NavLink
            exact='true'
            to='/seasonal'
            className='nav-link'
            activeclassname='active'
          >
            <span className='link-text'>Seasonal Anime</span>
          </NavLink>
        </li>
      </ul>
      <SearchBar />
    </nav>
  );
}
