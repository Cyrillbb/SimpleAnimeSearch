import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ButtonBar from './ButtonBar/ButtonBar';
import AnimeList from './List/AnimeList';
import FavoritesList from './List/FavoritesList';
import Header from './Header';
import Categories from './List/Categories';
import Title from './Title';
import { connect } from 'react-redux';
import './Main.css'


function Main(props) {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/simpleAnimeSearch'>
            <ButtonBar />
            <AnimeList />
          </Route>
          <Route exact path='/simpleAnimeSearch/favorites'>
            <FavoritesList />
          </Route>
          <Route exact path='/simpleAnimeSearch/categories'>
            <Categories />
          </Route>
          <Route path={'/simpleAnimeSearch/' + props.titleId}>
            <Title />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}



const mapStateToProps = state => {
  return {
      titleId: state.title.id,      
  }
}

export default connect(mapStateToProps, null)(Main)