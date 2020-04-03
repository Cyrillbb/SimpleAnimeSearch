import React from 'react'
import { nameSearch } from './../../actions/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { debounce } from './../../utility';
import { Link } from 'react-router-dom'

function SearchBar(props) {
    const [input, setInput] = useState('')    

    return (
        <div>
            <input type="text" onChange={(event) => {setInput(event.target.value); props.getByName(input) }} />
            <Link to='/simpleAnimeSearch'>HOME</Link>
            <Link to='/fuck'>Favorites</Link>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getByName: (name) => dispatch(nameSearch(name))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)