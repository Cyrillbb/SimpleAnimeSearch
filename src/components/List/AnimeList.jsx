import React from "react";
import { connect } from "react-redux";
import { getMore, toggleFav } from "../../actions/actions";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";
import { getTitle } from "./../../actions/actions";
import "./AnimeList.css";
import { PropTypes } from "prop-types";
import { getComments, getError } from "../../actions/myApiActions";


function AnimeList(props) {
  return (
    <div style={{ backgroundColor: "#001f3f" }}>
      <div className="AnimeList">
        {props.pending ? (
          <div
            className="loader"
            style={{ margin: "auto", marginTop: "150px" }}
          ></div>
        ) : (
            props.results.map((item) => (
              <AnimeCard key={item.id} id={item.id}>
                <h3 className="AnimeCard__h3">
                  {props.favs.find(i => i.id === item.id) === undefined ? (
                    <i
                      className="far fa-star"
                      style={{ color: "yellow", cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}
                      onClick={() => {
                        if (props.token.length === 0) {
                          props.getError('Login to manage favourites');
                        }
                        else {
                          props.addFav(item, props.token, props.favs);
                        }
                      }}
                    ></i>
                  ) : (
                      <i
                        className="fas fa-star"
                        style={{ color: "yellow", cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}
                        onClick={() => {
                          props.addFav(item, props.token, props.favs)
                        }}
                      ></i>
                    )}
                  <Link to={"/SimpleAnimeSearch/" + item.id}
                    style={{ textDecoration: 'none', color: 'white' }}
                    onClick={() => { props.getTit(item.id); props.getComments(item.id) }}
                  >
                    {item.attributes.canonicalTitle}
                  </Link>
                </h3>
                <Link to={"/SimpleAnimeSearch/" + item.id}>
                  <img
                    className="img"
                    onClick={() => { props.getTit(item.id); props.getComments(item.id) }}
                    src={item.attributes.posterImage.medium}
                    alt=""
                  />
                </Link>
              </AnimeCard>
            ))
          )}
      </div>
      {props.more ? (
        <div className="loader" style={{ margin: "auto" }}></div>
      ) : (
          <button
            className="AnimeList__btn"
            style={{ marginTop: "150px" }}
            onClick={() => {
              props.getMoreRes(props.url, props.offset);
            }}
          >
            Show More
          </button>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    results: [...state.results.loadedData],
    url: state.results.url,
    favs: [...state.favorites],
    pending: state.results.pending,
    more: state.results.pendingMore,
    offset: state.results.offset,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreRes: (url, offset) => dispatch(getMore(url, offset)),
    addFav: (item, token, favs) => dispatch(toggleFav(item, token, favs)),
    getTit: (id) => dispatch(getTitle(id)),
    getComments: (id) => dispatch(getComments(id)),
    getError: (msg) => dispatch(getError(msg)),
  };
};

AnimeList.propTypes = {
  results: PropTypes.array,
  url: PropTypes.string,
  favorites: PropTypes.array,
  favIds: PropTypes.array,
  pending: PropTypes.bool,
  more: PropTypes.bool,
  getMoreRes: PropTypes.func,
  addFav: PropTypes.func,
  getTit: PropTypes.func,
  offset: PropTypes.number,
  token: PropTypes.string,
  getComments: PropTypes.func,
  getError: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);