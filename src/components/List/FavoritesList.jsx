import React from "react";
import { toggleFav, getTitle } from "./../../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favs.css";
import { PropTypes } from "prop-types";
import { getComments } from './../../actions/myApiActions';

function FavoriresList(props) {
  const { favorites, token, addFav, getTit, getComments } = props;

  return (
    <div className="Favs">
      {token.length > 0 ?
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
            {favorites.map((item) => (
              <tr key={item.id} style={{ border: 'solid 1px white' }}>
                <td style={{ border: 'solid 1px white', width: '5vw' }}>
                  <i
                    className="fas fa-star"
                    style={{ color: "yellow", cursor: 'pointer' }}
                    onClick={() => {
                      addFav(item, token, favorites)
                    }}
                  ></i>
                </td>
                <td style={{ border: 'solid 1px white', width: '50vw' }}>
                  <Link
                    className="Favs__card__link"
                    to={"/" + item.id}
                  >
                    <h3 className="cardH" onClick={() => { getTit(item.id); getComments(item.id) }}>
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
        </table> :
        <h3 style={{ color: 'red' }}>You must login to use favorites section</h3>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: [...state.favorites],
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (item, token, favs) => dispatch(toggleFav(item, token, favs)),
    getTit: (id) => dispatch(getTitle(id)),
    getComments: (id) => dispatch(getComments(id))
  };
};

FavoriresList.propTypes = {
  favorites: PropTypes.array,
  token: PropTypes.string,
  favIds: PropTypes.array,
  toggleFav: PropTypes.func,
  getTit: PropTypes.func,
  getComments: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriresList);
