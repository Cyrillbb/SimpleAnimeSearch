import React from 'react'
import { connect } from 'react-redux'
import { getMore, toggleFav } from '../../actions/actions'
import { useState } from 'react'
import AnimeCard from './AnimeCard';
import { setLocalStr } from '../../utility';
import { useEffect } from 'react';

function AnimeList(props) {
    const [offset, setOffset] = useState(10)
    useEffect(() => setLocalStr(props.favIds, props.favorites))


    return (
        <div>

            {props.results.map((item) =>
                <AnimeCard key={item.id} id={item.id}>
                    <h3 className='cardH'>
                        {props.favIds.indexOf(item.id) === -1 ?
                            <i className="far fa-star" onClick={() => {
                                props.addFav(item.id, item); 
                                
                            }
                            }></i> :
                            <i className="fas fa-star" onClick={() => {
                                props.addFav(item.id, item);
                                
                            }
                            }></i>}
                        {item.attributes.canonicalTitle}
                    </h3>
                    <img className='img' src={item.attributes.posterImage.medium} alt="" />
                </AnimeCard>
            )}
            <button onClick={
                () => {
                    setOffset(offset + 10);
                    props.getMoreRes(props.url, offset);
                }
            }>

                Show More</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: [...state.results.loadedData],
        url: state.results.url,
        favorites: [...state.favorites.favs],
        favIds: [...state.favorites.favIds]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMoreRes: (url, offset) => dispatch(getMore(url, offset)),
        addFav: (id, item) => dispatch(toggleFav(id, item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList)    