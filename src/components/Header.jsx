import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getAnime, getLocalStr, getCateg } from "./../actions/actions";
import { queryParts } from "./../constants";
import "./Header.css";
import { PropTypes } from "prop-types";

function Header(props) {
  useEffect(() => {
    props.getPop();
    props.getCat();
    if (localStorage.getItem("favs")) {
      props.getLcStr();
    }
  }, [props]);

  const navRef = useRef(null)

  const handleHide = () => {
    if (
      navRef.current.className === "header__nav") {
      navRef.current.className = "header__nav--responsive";
    } else if (
      navRef.current.className === "header__nav--responsive") {
      navRef.current.className = "header__nav";
    }
  };

  return (
    <div className="header">
      <h3 className="header__h3">
        Simple Anime Search
        <i className="fas fa-bars" id="bars" onClick={handleHide}></i>
      </h3>
      <nav className="header__nav" id="nav" ref={navRef}>
        <Link className="header__nav__Link" to="/SimpleAnimeSearch">
          Discover Anime
        </Link>
        <Link className="header__nav__Link" to="/SimpleAnimeSearch/categories">
          Browse popular categories
        </Link>
        <Link className="header__nav__Link" to="/SimpleAnimeSearch/favorites">
          Favorites
        </Link>
      </nav>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPop: () => dispatch(getAnime(queryParts.mostPop)),
    getLcStr: () => dispatch(getLocalStr()),
    getCat: () => dispatch(getCateg()),
  };
};

Header.propTypes = {
  getPop: PropTypes.func,
  getLcStr: PropTypes.func,
  getCat: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Header);
