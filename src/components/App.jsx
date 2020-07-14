import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ButtonBar from "./ButtonBar/ButtonBar";
import AnimeList from "./List/AnimeList";
import FavoritesList from "./List/FavoritesList";
import Header from "./Header";
import Categories from "./List/Categories";
import Title from "./Title";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import "./App.css";
import RegWindow from "./auth/RegWindow";
import { useEffect } from "react";
import { getToken, getUserByToken, getFavorites } from "../actions/myApiActions";
import LoginWindow from "./auth/LoginWindow";
import { useState } from "react";
import MessageModal from './messageModal/MessageModal';
import CurrentResults from "./currentResults/CurrentResults";

function App(props) {
  const { getToken, getUserName, getFavs, token, error, titleId } = props;

  const [errModal, setErrModal] = useState(false);

  useEffect(() => {
    let cookie = document.cookie.split('=');
    if (cookie[0] === 'token' && cookie[1].length > 0) {
      getToken(cookie[1]);
      getUserName(cookie[1]);
    }
  }, [getToken, getUserName]);

  useEffect(() => {
    if (token.length > 0) {
      getFavs(token);
    }
  }, [token, getFavs]);

  useEffect(() => {
    if (error.length > 0) {
      setErrModal(true);
    }
    else {
      setErrModal(false);
    }
  }, [error]);


  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        {errModal ? <MessageModal /> : undefined}
        <Switch>
          <Route exact path="/SimpleAnimeSearch">
            <ButtonBar />
            <CurrentResults />
            <AnimeList />
          </Route>
          <Route exact path="/SimpleAnimeSearch/favorites">
            <FavoritesList />
          </Route>
          <Route exact path="/SimpleAnimeSearch/categories">
            <Categories />
          </Route>
          <Route exact path="/SimpleAnimeSearch/registration">
            <RegWindow />
          </Route>
          <Route exact path="/SimpleAnimeSearch/login">
            <LoginWindow />
          </Route>
          <Route path={"/SimpleAnimeSearch/" + titleId}>
            <Title />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    titleId: state.title.id,
    name: state.userName,
    favs: state.favorites,
    token: state.token,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: (token) => dispatch(getToken(token)),
    getUserName: (token) => dispatch(getUserByToken(token)),
    getFavs: (token) => dispatch(getFavorites(token))
  }
}

App.propTypes = {
  titleId: PropTypes.string,
  name: PropTypes.string,
  favs: PropTypes.array,
  token: PropTypes.string,
  error: PropTypes.string,
  getToken: PropTypes.func,
  getUserName: PropTypes.func,
  getFavs: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
