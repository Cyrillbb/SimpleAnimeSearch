import React, { useEffect } from "react";
import { toggleFav, getTitle } from "./../../actions/actions";
import { connect } from "react-redux";
import { setLocalStr } from "../../utility";
import { Link } from "react-router-dom";
import "./Favs.css";
import { PropTypes } from "prop-types";

function FavoriresList(props) {
  useEffect(() => setLocalStr(props.favorites));

  return (
    <div className="Favs">
      <table style={{ borderCollapse: 'collapse', border: 'solid 1px white' }}>
        <tbody>
          <tr style={{ border: 'solid 1px white' }}>
            <td style={{ border: 'solid 1px white' }}>
              Remove
            </td>
            <td style={{ border: 'solid 1px white' }}>
              Title
            </td>
            <td style={{ border: 'solid 1px white' }}>
              Rating
            </td>
          </tr>
          {props.favorites.map((item) => (
            <tr key={item.id} style={{ border: 'solid 1px white' }}>
              <td style={{ border: 'solid 1px white', width: '5vw' }}>
                <i
                  className="fas fa-star"
                  style={{ color: "yellow" }}
                  onClick={() => {
                    props.toggleFav(item);
                  }}
                ></i>
              </td>
              <td style={{ border: 'solid 1px white', width: '50vw' }}>
                <Link
                  className="Favs__card__link"
                  to={"/SimpleAnimeSearch/" + item.id}
                >
                  <h3 className="cardH" onClick={() => props.getTit(item.id)}>
                    {item.attributes.canonicalTitle}
                  </h3>
                </Link>
              </td>
              <td style={{ border: 'solid 1px white', width: '5vw' }}>
                {item.attributes.averageRating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: [...state.favorites.favs],    
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
