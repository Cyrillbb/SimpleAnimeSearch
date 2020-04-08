import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAnime, getLocalStr, getCateg } from './../actions/actions';
import { queryParts } from './../constants';
import './Header.css'

function Header(props) {
    useEffect(() => {
        (props.getPop());
        (props.getCat());
        if (localStorage.getItem('ids') && localStorage.getItem('favs')) {
            props.getLcStr()
        }
    }, [props])

    const handleHide = () => {
        if (document.getElementById('nav').className === 'header__nav') {
            document.getElementById('nav').className = 'header__nav--responsive'
        }
        else {
            document.getElementById('nav').className = 'header__nav'
        }
        if (document.getElementById('btnBar') && document.getElementById('btnBar').className === 'ButtonBar') {
            document.getElementById('btnBar').className = 'ButtonBar--responsive'
            document.getElementById('nav').className = 'header__nav--responsive'
        }
        else if(document.getElementById('btnBar') && document.getElementById('btnBar').className === 'ButtonBar--responsive') {
            document.getElementById('btnBar').className = 'ButtonBar'
            document.getElementById('nav').className = 'header__nav'
        }
    }

    return (
        <div className='header'>
            <h3 className='header__h3'>Simple Anime Search
            <i class="fas fa-bars" id='bars' onClick={handleHide}></i>
            </h3>
            <nav className='header__nav' id='nav'>
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
