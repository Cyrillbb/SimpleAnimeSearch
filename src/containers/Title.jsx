import React from 'react'
import { toggleFav } from './../actions/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setLocalStr } from '../utility';

function Title(props) {
    useEffect(() => setLocalStr(props.favIds, props.favorites))

    return (
        <div>
            {
                Object.keys(props.title).length > 0 ?
                    <div>
                        <h3 className='cardH'>
                            {props.favIds.indexOf(props.title.id) === -1 ?
                                <i className="far fa-star" onClick={() => {
                                    props.addFav(props.title.id, props.title);

                                }
                                }></i> :
                                <i className="fas fa-star" onClick={() => {
                                    props.addFav(props.title.id, props.title);

                                }
                                }></i>}
                            {props.title.attributes.canonicalTitle}
                        </h3>
                        <p>
                            Avrage Rating:   {props.title.attributes.averageRating}
                        </p>
                        <p>
                            Popularity rank: {props.title.attributes.popularityRank}
                        </p>
                        <p>
                            Age rating: {props.title.attributes.ageRating}
                        </p>
                        <p>
                            Number of episodes: {props.title.attributes.episodeCount}
                        </p>
                        <p>
                            Status: {props.title.attributes.status}
                        </p>
                        <img className='img' src={props.title.attributes.posterImage.medium} alt="" />
                        <p className='descHide' id={props.title.id + 'desc'}>
                            Synopsis: {props.title.attributes.synopsis}
                        </p>
                    </div> :
                    <h3>LOADING...</h3>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        title: state.title,
        favorites: [...state.favorites.favs],
        favIds: [...state.favorites.favIds]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFav: (id, item) => dispatch(toggleFav(id, item)),       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Title)
