import React from 'react'
import { getTitle } from './../actions/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Title(props) {
    useEffect(() => console.log(props))

    return (
        <div>
            {
                Object.keys(props.title).length > 0 ?
                    <div>
                        <h3 className='cardH'>
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
        title: state.title
    }
}


export default connect(mapStateToProps, null)(Title)