import React, { createContext, useReducer, useEffect } from 'react';
import songReducer from '../reducers/songReducer';

export const SongContext = createContext();

const SongContextProvider = props => {
  const [songs, dispatch] = useReducer(songReducer, [], () => {
    const localData = localStorage.getItem('songs');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  return (
    <SongContext.Provider value={{ songs, dispatch }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;
