import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import SongContextProvider from './contexts/SongContext';

function App() {
  return (
    <div className='App'>
      <SongContextProvider>
        <Navbar />
        <SongForm />
        <SongList />
      </SongContextProvider>
    </div>
  );
}

export default App;
