import React, { useRef } from "react";
import { connect } from "react-redux";
import { getAnime } from "./../../actions/actions";
import { queryParts } from "./../../constants";
import { debounce } from "./../../utility";
import "./ButtonBar.css";
import { PropTypes } from "prop-types";

function ButtonBar({ getPop, getTop, getAir, getByName }) {
  const searchRef = useRef(null);
  return (
    <div className="ButtonBar" id="btnBar">
      <input
        type="text"
        className="ButtonBar__input"
        ref={searchRef}
        placeholder="anime search"
        onChange={debounce(() => {
          if (searchRef.current.value.length > 0) {
            getByName(
              queryParts.nameSearch + searchRef.current.value, `${searchRef.current.value}`
            );
          }
          else {
            getPop();
          }
        }, 1000)}
      />
      <button className="ButtonBar__button" style={{ cursor: 'pointer' }} onClick={getPop}>
        Most Popular
      </button>
      <button className="ButtonBar__button" style={{ cursor: 'pointer' }} onClick={getTop}>
        Top Rated
      </button>
      <button className="ButtonBar__button" style={{ cursor: 'pointer' }} onClick={getAir}>
        Top Airing
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPop: () => dispatch(getAnime(queryParts.mostPop, 'Most Popular')),
    getTop: () => dispatch(getAnime(queryParts.topRated, 'Top rated')),
    getAir: () => dispatch(getAnime(queryParts.topAir, 'Top Airing')),
    getByName: (name, searchName) => dispatch(getAnime(name, searchName)),
  };
};

ButtonBar.propTypes = {
  getPop: PropTypes.func,
  getTop: PropTypes.func,
  getAir: PropTypes.func,
  getByName: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ButtonBar);
