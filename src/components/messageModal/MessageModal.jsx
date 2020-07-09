import React from 'react';
import './MessageModal.css'
import { getError } from '../../actions/myApiActions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';


function MessageModal(props) {
    return (
        <div className='frame' onClick={() => props.setError('')}>
            <div className='messageModal'>
                <span className='messageModal__body'>ERROR: {props.error}</span>
                <button className='messageModal__btn' onClick={() => props.setError('')}>Ok</button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        error: state.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setError: (msg) => dispatch(getError(msg)),
    }
};

MessageModal.propTypes = {
    error: PropTypes.string,
    setError: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal);