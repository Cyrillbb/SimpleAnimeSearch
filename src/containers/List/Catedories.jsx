import React from 'react'
import { getCateg } from './../../actions/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Categories(props) {    
    return (
        <div>
            {props.categ.map(item =>
                <p>{item.attributes.title}</p>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categ: state.categories,
    }
}


export default connect(mapStateToProps, null)(Categories)