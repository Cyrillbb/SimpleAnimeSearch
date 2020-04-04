import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonBar from './../containers/ButtonBar/ButtonBar';
import SearchBar from './../containers/SearchBar/SearchBar';
import AnimeList from '../containers/List/AnimeList';
import FavoritesList from '../containers/List/FavoritesList';


function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route exact path='/simpleAnimeSearch'>
            <ButtonBar />
            <AnimeList />
          </Route>
          <Route exact path='/fuck'>
            <FavoritesList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Main;