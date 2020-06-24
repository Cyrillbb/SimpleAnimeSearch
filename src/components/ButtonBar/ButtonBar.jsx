import React, { useRef } from "react";
import { connect } from "react-redux";
import { getAnime } from "./../../actions/actions";
import { queryParts } from "./../../constants";
import { debounce } from "./../../utility";
import "./ButtonBar.css";
import { PropTypes } from "prop-types";

function ButtonBar(props) {
  const searchRef = useRef(null);
  return (
    <div className="ButtonBar" id="btnBar">
      <input
        type="text"
        className="ButtonBar__input"
        ref={searchRef}
        placeholder="anime search"
        onChange={debounce(() => {
          props.getByName(
            queryParts.nameSearch + searchRef.current.value
          );
        }, 1000)}
      />
      <button className="ButtonBar__button" onClick={props.getPop}>
        Most Popular
      </button>
      <button className="ButtonBar__button" onClick={props.getTop}>
        Top Rated
      </button>
      <button className="ButtonBar__button" onClick={props.getAir}>
        Top Airing
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPop: () => dispatch(getAnime(queryParts.mostPop)),
    getTop: () => dispatch(getAnime(queryParts.topRated)),
    getAir: () => dispatch(getAnime(queryParts.topAir)),
    getByName: (name) => dispatch(getAnime(name)),
  };
};

ButtonBar.propTypes = {
  getPop: PropTypes.func,
  getTop: PropTypes.func,
  getAir: PropTypes.func,
  getByName: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ButtonBar);
