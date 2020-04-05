import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonBar from './../containers/ButtonBar/ButtonBar';
import AnimeList from '../containers/List/AnimeList';
import FavoritesList from '../containers/List/FavoritesList';
import Header from './../containers/Header';
import Categories from './../containers/List/Catedories';
import Title from '../containers/Title';


function Main() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/simpleAnimeSearch'>
            <ButtonBar />
            <AnimeList />
          </Route>
          <Route exact path='/favorites'>
            <FavoritesList />
          </Route>
          <Route exact path='/categories'>
            <Categories />
          </Route>
          <Route path='/title'>
            <Title />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Main;