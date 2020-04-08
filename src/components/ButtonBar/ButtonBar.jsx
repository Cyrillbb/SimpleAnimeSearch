import React from 'react'
import { connect } from 'react-redux'
import { getAnime } from './../../actions/actions';
import { queryParts } from './../../constants';
import { debounce } from './../../utility';
import './ButtonBar.css'

function ButtonBar(props) {    

    return (
        <div className='ButtonBar'>
            <input type="text" className='ButtonBar__input' id='search' placeholder='anime search' onChange={
                debounce(
                    () => {                        
                        props.getByName(queryParts.nameSearch + document.getElementById('search').value)
                    }, 1000)
            } />        
            <button className='ButtonBar__button' onClick={props.getPop}>Most Popular</button>
            <button className='ButtonBar__button' onClick={props.getTop}>Top Rated</button>
            <button className='ButtonBar__button' onClick={props.getAir}>Top Airing</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getPop: () => dispatch(getAnime(queryParts.mostPop)),
        getTop: () => dispatch(getAnime(queryParts.topRated)),
        getAir: () => dispatch(getAnime(queryParts.topAir)),
        getByName: (name) => dispatch(getAnime(name))
    }
}

export default connect(null, mapDispatchToProps)(ButtonBar)