import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getAnime, getLocalStr, getCateg } from "./../actions/actions";
import { queryParts } from "./../constants";
import "./Header.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import Dropdown from "./dropDown";

function Header(props) {
  const [showDropDown, setDropDown] = useState(false)

  useEffect(() => {
    props.getPop();
    props.getCat();
  }, [props]);

  const navRef = useRef(null);


  const handleHide = () => {
    if (
      navRef.current.className === "header__nav") {
      navRef.current.className = "header__nav--responsive";
    } else if (
      navRef.current.className === "header__nav--responsive") {
      navRef.current.className = "header__nav";
    }
  };

  const handleDropDown = () => {
    showDropDown ? setDropDown(false) : setDropDown(true)
  }

  return (
    <div className="header">
      <h3 className="header__h3">
        Simple Anime Search
        <i className="fas fa-bars" id="bars" onClick={handleHide}></i>
        {props.name.length === 0 ?
          <Link to='/SimpleAnimeSearch/login' className='header__Link'>
            <span className='heder__Link__txt'>Login</span>
          </Link> :
          <button className='header__Link' onClick={handleDropDown}>
            <span className='heder__Link__txt'>{props.name}</span>
            <i className="fas fa-angle-down" style={{ margin: '5px' }}></i>
            {showDropDown ? <Dropdown /> : undefined}
          </button>}
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

const mapStateToProps = state => {
  return {
    name: state.userName,
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
