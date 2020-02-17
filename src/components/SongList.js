import React, { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';
import SongDetails from './SongDetails';

const SongList = () => {
  const { songs } = useContext(SongContext);

  return songs.length ? (
    <div className='song-list'>
      <button className='remove-all'>remove all songs</button>
      <ul>
        {songs.map(song => {
          return <SongDetails key={song.id} song={song} />;
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>
      <p>Hey, you don't have songs to listen to.</p>
    </div>
  );
};

export default SongList;
