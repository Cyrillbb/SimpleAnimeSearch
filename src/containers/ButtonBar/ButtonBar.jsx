import React from 'react'
import { connect } from 'react-redux'
import { getAnime } from './../../actions/actions';
import { queryParts } from './../../constants';
import { useEffect } from 'react';

function ButtonBar(props) {
    useEffect(() => props.getPop(), [])

    return (
        <div>
            <button onClick={props.getPop}>Most Popular</button>
            <button onClick={props.getTop}>Top Rated</button>
            <button onClick={props.getAir}>Top Airing</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getPop: () => dispatch(getAnime(queryParts.mostPop)),
        getTop: () => dispatch(getAnime(queryParts.topRated)),
        getAir: () => dispatch(getAnime(queryParts.topAir))
    }
}

export default connect(null, mapDispatchToProps)(ButtonBar)