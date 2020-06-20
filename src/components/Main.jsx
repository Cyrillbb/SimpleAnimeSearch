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
import "./Main.css";
import RegWindow from "./auth/RegWindow";
import { useEffect } from "react";
import { getToken, getUserByToken } from "../actions/myApiActions";
import LoginWindow from "./auth/LoginWindow";

function Main(props) {
  const { getToken, getUserName } = props
  useEffect(() => {
    let cookie = document.cookie.split('=')
    if (cookie[0] === 'token' && cookie[1].length > 0) {
      getToken(cookie[1])
      getUserName(cookie[1])
    }
  }, [getToken, getUserName])

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/SimpleAnimeSearch">
            <ButtonBar />
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
          <Route path={"/SimpleAnimeSearch/" + props.titleId}>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: (token) => dispatch(getToken(token)),
    getUserName: (token) => dispatch(getUserByToken(token))
  }
}

Main.propTypes = {
  titleId: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
