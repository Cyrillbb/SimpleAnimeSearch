import React from "react";
import { connect } from "react-redux";
import { getMore, toggleFav } from "../../actions/actions";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import { setLocalStr } from "../../utility";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTitle } from "./../../actions/actions";
import "./AnimeList.css";
import { PropTypes } from "prop-types";
import { queryParts } from './../../constants';

function AnimeList(props) {
  const [offset, setOffset] = useState(10);
  useEffect(() => setLocalStr(props.favIds, props.favorites));

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
                  {props.favIds.indexOf(item.id) === -1 ? (
                    <i
                      className="far fa-star"
                      style={{ color: "yellow" }}
                      onClick={() => {
                        props.addFav(item.id, item);
                      }}
                    ></i>
                  ) : (
                      <i
                        className="fas fa-star"
                        style={{ color: "yellow" }}
                        onClick={() => {
                          props.addFav(item.id, item);
                        }}
                      ></i>
                    )}
                  {item.attributes.canonicalTitle}
                </h3>
                <Link to={"/SimpleAnimeSearch/" + item.id}>
                  <img
                    className="img"
                    onClick={() => props.getTit(item.id)}
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
              setOffset(offset + 12);
              props.getMoreRes(props.url, offset);
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
    favorites: [...state.favorites.favs],
    favIds: [...state.favorites.favIds],
    pending: state.results.pending,
    more: state.results.pendingMore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreRes: (url, offset) => dispatch(getMore(url, offset)),
    addFav: (id, item) => dispatch(toggleFav(id, item)),
    getTit: (id) => dispatch(getTitle(id)),
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
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
