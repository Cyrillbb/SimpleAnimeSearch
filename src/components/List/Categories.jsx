import React from 'react'
import { getAnime } from './../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { queryParts } from './../../constants';
import './Categories.css'

function Categories(props) {
    return (
        <div className="Cats">
            {props.categ.map(item =>
                <Link className='Cats__link' to='/SimpleAnimeSearch'
                    onClick={
                        () => props.search(queryParts.categSearch + item.attributes.title + queryParts.mostPop)}>
                    {item.attributes.title}</Link>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categ: state.categories,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: (catName) => dispatch(getAnime(catName))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)