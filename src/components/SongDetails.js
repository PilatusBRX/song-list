import React, { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';
import { MdDelete } from 'react-icons/md';

const SongDetails = ({ song }) => {
  const { removeSong } = useContext(SongContext);
  return (
    <li onClick={() => removeSong(song.id)}>
      <div className='title'>{song.title} </div>
      <div className='author'>
        <code>{song.singer}</code>
      </div>
      <button className='clear-btn' aria-label='delete button'>
        <MdDelete />
      </button>
    </li>
  );
};

export default SongDetails;
