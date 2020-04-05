import React, { useEffect } from 'react'
import { toggleFav } from './../../actions/actions';
import { connect } from 'react-redux';
import AnimeCard from './AnimeCard';
import { setLocalStr } from '../../utility';

function FavoriresList(props) {
    useEffect(() => setLocalStr(props.favIds, props.favorites))

    return (
        <div>
            {props.favorites.map((item) =>
                <AnimeCard key={item.id} id={item.id}>
                    <h3 className='cardH'>
                        <i className="fas fa-star" onClick={() => {
                            props.toggleFav(item.id, item)                                                        
                        }
                        }></i>
                        {item.attributes.canonicalTitle}
                    </h3>                    
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
        toggleFav: (id) => dispatch(toggleFav(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriresList)