import React from 'react'
import { getAnime } from './../../actions/actions';
import { connect } from 'react-redux';
import { debounce } from './../../utility';
import { Link } from 'react-router-dom'
import { queryParts } from './../../constants';

function SearchBar(props) {
    
    return (
        <div>
            <input type="text" id='search' onChange={
                debounce(
                    () => {                        
                        props.getByName(queryParts.nameSearch + document.getElementById('search').value)
                    }, 1000)
            } />
            <Link to='/simpleAnimeSearch'>HOME</Link>
            <Link to='/fuck'>Favorites</Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getByName: (name) => dispatch(getAnime(name))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)