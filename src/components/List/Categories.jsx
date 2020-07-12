import React from 'react'
import { getAnime } from './../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { queryParts } from './../../constants';
import './Categories.css'
import { PropTypes } from 'prop-types';

function Categories(props) {
    const { categ, search } = props;

    return (
        <div className="Cats">
            {categ.map(item =>
                <Link className='Cats__link' key={item.id} to='/SimpleAnimeSearch'
                    title={item.attributes.description}
                    onClick={
                        () => search(queryParts.categSearch + item.attributes.title + queryParts.mostPop)}>
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

Categories.propTypes = {
    categ: PropTypes.array,
    search: PropTypes.func
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)