import React from 'react'
import { connect } from 'react-redux'
import { getMore } from '../../actions/actions'
import { useState } from 'react'
import { queryParts } from './../../constants';

function AnimeList(props) {
    const [offset, setOffset] = useState(10)

    return (
        <div>
            {props.results.map((item) =>
                <div key={item.id} id={item.id}>
                    <h3 className='cardH'>
                        {item.attributes.canonicalTitle}
                    </h3>
                    <p>
                        Avrage Rating:   {item.attributes.averageRating}
                    </p>
                    <p>
                        Popularity rank: {item.attributes.popularityRank}
                    </p>
                    <p>
                        Age rating: {item.attributes.ageRating}
                    </p>
                    <p>
                        Number of episodes: {item.attributes.episodeCount}
                    </p>
                    <p>
                        Status: {item.attributes.status}
                    </p>
                    <img className='img' src={item.attributes.posterImage.medium} alt="" />
                    <p className='descHide' id={item.id + 'desc'}>
                        Synopsis: {item.attributes.synopsis}
                    </p>
                </div>
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
        url: state.results.url
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMoreRes: (url, offset) => dispatch(getMore(url, offset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList)