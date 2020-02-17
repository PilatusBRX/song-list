import React, { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';

const NavBar = () => {
  const { songs } = useContext(SongContext);
  return (
    <div className='navbar'>
      <h1>Panda Song List</h1>
      {songs.length > 0 && (
        <p>Currently you have {songs.length} songs to listen to...</p>
      )}
    </div>
  );
};

export default NavBar;
