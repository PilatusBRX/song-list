import React, { createContext, useReducer } from 'react';
import uuid from 'uuid/v4';
import songReducer from '../reducers/songReducer';

export const SongContext = createContext();

const SongContextProvider = props => {
  const [songs, dispatch] = useReducer(songReducer, [
    { title: 'under pressure', singer: 'Queen', id: uuid() },
    {
      title: 'castles in the air',
      singer: 'don mclean',
      id: uuid()
    },
    { title: 'bad', singer: 'michael jackson', id: uuid() },
    { title: 'aquarela', singer: 'toquinho', id: uuid() }
  ]);

  return (
    <SongContext.Provider value={{ songs, dispatch }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
