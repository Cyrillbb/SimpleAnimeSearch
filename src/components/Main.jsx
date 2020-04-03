import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ButtonBar from './../containers/ButtonBar/ButtonBar';
import SearchBar from './../containers/SearchBar/SearchBar';
import AnimeList from '../containers/List/AnimeList';


function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <ButtonBar />
        <AnimeList />
      </BrowserRouter>
    </div>
  );
}

export default Main;
