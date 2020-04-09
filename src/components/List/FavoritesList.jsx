import React, { useEffect } from "react";
import { toggleFav, getTitle } from "./../../actions/actions";
import { connect } from "react-redux";
import { setLocalStr } from "../../utility";
import { Link } from "react-router-dom";
import "./Favs.css";
import { PropTypes } from "prop-types";

function FavoriresList(props) {
  useEffect(() => setLocalStr(props.favIds, props.favorites));

  return (
    <div className="Favs">
      {props.favorites.map((item) => (
        <div className="Favs__card" key={item.id}>
          <i
            className="fas fa-star"
            style={{ color: "yellow" }}
            onClick={() => {
              props.toggleFav(item.id, item);
            }}
          ></i>
          <Link
            className="Favs__card__link"
            to={"/SimpleAnimeSearch/" + item.id}
          >
            <h3 className="cardH" onClick={() => props.getTit(item.id)}>
              {item.attributes.canonicalTitle}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: [...state.favorites.favs],
    favIds: [...state.favorites.favIds],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFav: (id) => dispatch(toggleFav(id)),
    getTit: (id) => dispatch(getTitle(id)),
  };
};

FavoriresList.propTypes = {
  favorites: PropTypes.array,
  favIds: PropTypes.array,
  toggleFav: PropTypes.func,
  getTit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriresList);
