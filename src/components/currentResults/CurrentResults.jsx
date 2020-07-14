import React from 'react';
import { connect } from 'react-redux';
import './CurrentResults.css'

function CurrentResults({ current }) {
    return (
        <div className='currentResults'>
            <h3>{current}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        current: state.results.searchName
    }
}

export default connect(mapStateToProps, null)(CurrentResults)