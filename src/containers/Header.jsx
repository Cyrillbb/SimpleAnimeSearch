import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAnime, getLocalStr, getCateg } from './../actions/actions';
import { queryParts } from './../constants';

function Header(props) {
    useEffect(() => {(props.getPop());
        (props.getCat());
    if(localStorage.getItem('ids') && localStorage.getItem('favs')) {
        props.getLcStr()
    }
    }, [])    

    return (
        <div>
            <h1>Simple Anime Search</h1>
            <Link to='/simpleAnimeSearch'>Discover Anime</Link>
            <Link to='/categories'>Browse popular categories</Link>
            <Link to='/fuck'>Favorites</Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getPop: () => dispatch(getAnime(queryParts.mostPop)),
        getLcStr: () => dispatch(getLocalStr()),
        getCat: () => dispatch(getCateg())       
    }
}

export default connect(null, mapDispatchToProps)(Header)
