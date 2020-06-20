import React from "react";
import { connect } from "react-redux";
import { getMore, toggleFav } from "../../actions/actions";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";
import { getTitle } from "./../../actions/actions";
import "./AnimeList.css";
import { PropTypes } from "prop-types";
import { getComments } from "../../actions/myApiActions";
import { myApiEND } from './../../constants';
import { useEffect } from "react";

function AnimeList(props) {
  useEffect(() => {
    fetch(myApiEND + 'saveFavs', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${props.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favs: props.favs })
    })
  }, [props.favs, props.token])

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
                      style={{ color: "yellow" }}
                      onClick={() => {
                        props.addFav(item);

                      }}
                    ></i>
                  ) : (
                      <i
                        className="fas fa-star"
                        style={{ color: "yellow" }}
                        onClick={() => {
                          props.addFav(item);
                        }}
                      ></i>
                    )}
                  {item.attributes.canonicalTitle}
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
    addFav: (item) => dispatch(toggleFav(item)),
    getTit: (id) => dispatch(getTitle(id)),
    getComments: (id) => dispatch(getComments(id))
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
};


export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);