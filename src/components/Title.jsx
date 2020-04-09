import React from "react";
import { toggleFav, getTitle } from "./../actions/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { setLocalStr } from "../utility";
import "./Title.css";
import { PropTypes } from "prop-types";

function Title(props) {
  useEffect(() => setLocalStr(props.favIds, props.favorites));
  useEffect(() => {
    if (!props.titleId) {
      let id = window.location.pathname.split("/").pop();
      props.getTit(id);
    }
  }, [props]);

  return (
    <div className="TitleBox">
      {props.pending ? (
        <div
          className="loader"
          style={{ margin: "auto", marginTop: "150px" }}
        ></div>
      ) : (
        <div className="TitleBox__info">
          <img
            className="TitleBox__info__img"
            src={props.title.attributes.posterImage.medium}
            alt=""
          />
          <div className="TitleBox__info__text">
            <h3 className="cardH">
              {props.favIds.indexOf(props.title.id) === -1 ? (
                <i
                  className="far fa-star"
                  style={{ color: "yellow" }}
                  onClick={() => {
                    props.addFav(props.title.id, props.title);
                  }}
                ></i>
              ) : (
                <i
                  className="fas fa-star"
                  style={{ color: "yellow" }}
                  onClick={() => {
                    props.addFav(props.title.id, props.title);
                  }}
                ></i>
              )}
              {props.title.attributes.canonicalTitle}
            </h3>
            <p>Avrage Rating: {props.title.attributes.averageRating}</p>
            <p>Popularity rank: {props.title.attributes.popularityRank}</p>
            <p>Age rating: {props.title.attributes.ageRating}</p>
            <p>Number of episodes: {props.title.attributes.episodeCount}</p>
            <p>Status: {props.title.attributes.status}</p>

            <p className="descHide" id={props.title.id + "desc"}>
              Synopsis:
            </p>
            <p>{props.title.attributes.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.title.title,
    favorites: [...state.favorites.favs],
    favIds: [...state.favorites.favIds],
    pending: state.title.pending,
    titleId: state.title.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (id, item) => dispatch(toggleFav(id, item)),
    getTit: (id) => dispatch(getTitle(id)),
  };
};

Title.propTypes = {
  title: PropTypes.object,
  favorites: PropTypes.array,
  favIds: PropTypes.array,
  pending: PropTypes.bool,
  titleId: PropTypes.string,
  addFav: PropTypes.func,
  getTit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
