import React from 'react'
import { connect } from 'react-redux'
import { getAnime } from './../../actions/actions';
import { queryParts } from './../../constants';
import { debounce } from './../../utility';


function ButtonBar(props) {    

    return (
        <div>
            <input type="text" id='search' onChange={
                debounce(
                    () => {                        
                        props.getByName(queryParts.nameSearch + document.getElementById('search').value)
                    }, 1000)
            } />        
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
        getAir: () => dispatch(getAnime(queryParts.topAir)),
        getByName: (name) => dispatch(getAnime(name))
    }
}

export default connect(null, mapDispatchToProps)(ButtonBar)