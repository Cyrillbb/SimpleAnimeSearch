import React, { useEffect } from 'react'
import { toggleFav, getTitle } from './../../actions/actions';
import { connect } from 'react-redux';
import AnimeCard from './AnimeCard';
import { setLocalStr } from '../../utility';
import { Link } from 'react-router-dom';

function FavoriresList(props) {
    useEffect(() => setLocalStr(props.favIds, props.favorites))

    return (
        <div>
            {props.favorites.map((item) =>
                <AnimeCard key={item.id} id={item.id}>
                    <Link to={'/simpleAnimeSearch/' + item.id}>
                        <h3 className='cardH' onClick={() => props.getTit(item.id)}>
                            <i className="fas fa-star" onClick={() => {
                                props.toggleFav(item.id, item)
                            }
                            }></i>
                            {item.attributes.canonicalTitle}
                        </h3>
                    </Link>
                </AnimeCard>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: [...state.favorites.favs],
        favIds: [...state.favorites.favIds]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFav: (id) => dispatch(toggleFav(id)),
        getTit: (id) => dispatch(getTitle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriresList)