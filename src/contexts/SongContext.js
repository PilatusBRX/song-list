import React, { createContext, useState } from 'react';
import uuid from 'uuid/v4';

export const SongContext = createContext();

const SongContextProvider = props => {
  const [songs, setSongs] = useState([
    { title: 'under pressure', singer: 'Queen', id: uuid() },
    {
      title: 'castles in the air',
      singer: 'don mclean',
      id: uuid()
    },
    { title: 'bad', singer: 'michael jackson', id: uuid() },
    { title: 'aquarela', singer: 'toquinho', id: uuid() }
  ]);

  const addSong = (title, singer) => {
    setSongs([...songs, { title, singer, id: uuid() }]);
    // setSongs([...books, { title: title, singer: singer, id: uuid() }]);
  };

  const removeSong = id => {
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <SongContext.Provider value={{ songs, addSong, removeSong }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
