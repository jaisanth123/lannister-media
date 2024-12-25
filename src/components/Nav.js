import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';

const Nav = () => {
  const { search,setsearch } = useContext(DataContext)
  return (
    <nav className='Nav'>
      <form className='searchForm {
' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label>
        <input
          id="search"
          type='text'
          placeholder='Search posts'
          value={search} 
          //! if search has a value "lannister" then the input feild will show lannister 
          onChange={(e) => setsearch(e.target.value)}
          //! chnages the value of the seach for every change in the input box
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
