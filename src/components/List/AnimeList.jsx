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
  const { results, url, favs, pending, more, offset, token, getMoreRes, addFav, getTit, getComments, getError } = props;

  return (
    <div style={{ backgroundColor: "#001f3f" }}>
      <div className="AnimeList">
        {pending ? (
          <div
            className="loader"
            style={{ margin: "auto", marginTop: "150px" }}
          ></div>
        ) : (
            results.map((item) => (
              <AnimeCard key={item.id} id={item.id}>
                <h3 className="AnimeCard__h3">
                  {favs.find(i => i.id === item.id) === undefined ? (
                    <i
                      className="far fa-star"
                      style={{ color: "yellow", cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}
                      onClick={() => {
                        if (token.length === 0) {
                          getError('Login to manage favorites');
                        }
                        else {
                          addFav(item, token, favs);
                        }
                      }}
                    ></i>
                  ) : (
                      <i
                        className="fas fa-star"
                        style={{ color: "yellow", cursor: 'pointer', position: 'absolute', top: '5px', right: '5px' }}
                        onClick={() => {
                          addFav(item, token, favs)
                        }}
                      ></i>
                    )}
                  <Link to={"/SimpleAnimeSearch/" + item.id}
                    style={{ textDecoration: 'none', color: 'white' }}
                    onClick={() => { getTit(item.id); getComments(item.id) }}
                  >
                    {item.attributes.canonicalTitle}
                  </Link>
                </h3>
                <Link to={"/SimpleAnimeSearch/" + item.id}>
                  <img
                    className="img"
                    loading="lazy"
                    onClick={() => { getTit(item.id); getComments(item.id) }}
                    src={item.attributes.posterImage.medium}
                    alt=""
                  />
                </Link>
              </AnimeCard>
            ))
          )}
      </div>
      {more ? (
        <div className="loader" style={{ margin: "auto" }}></div>
      ) : (
          <button
            className="AnimeList__btn"
            style={{ marginTop: "150px" }}
            onClick={() => {
              getMoreRes(url, offset);
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