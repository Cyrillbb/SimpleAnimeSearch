import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAnime, getLocalStr, getCateg } from './../actions/actions';
import { queryParts } from './../constants';
import './Header.css'

function Header(props) {
    useEffect(() => {(props.getPop());
        (props.getCat());
    if(localStorage.getItem('ids') && localStorage.getItem('favs')) {
        props.getLcStr()
    }
    }, [props])    

    return (
        <div className='header'>
            <h3 className='header__h3'>Simple Anime Search</h3>
            <nav className='header__nav'>
            <Link className='header__nav__Link' to='/SimpleAnimeSearch'>Discover Anime</Link>
            <Link className='header__nav__Link' to='/SimpleAnimeSearch/categories'>Browse popular categories</Link>
            <Link className='header__nav__Link' to='/SimpleAnimeSearch/favorites'>Favorites</Link>
            </nav>
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
