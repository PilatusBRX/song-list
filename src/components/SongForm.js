import React, { useContext, useState } from 'react';
import { SongContext } from '../contexts/SongContext';

const SongForm = () => {
  const { addSong } = useContext(SongContext);
  const [title, setTitle] = useState('');
  const [singer, setSinger] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addSong(title, singer);
    setTitle('');
    setSinger('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='song title...'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type='text'
          placeholder='song singer...'
          required
          value={singer}
          onChange={e => setSinger(e.target.value)}
          required
        />
        <input type='submit' value='add a song' />
      </form>
    </div>
  );
};

export default SongForm;
