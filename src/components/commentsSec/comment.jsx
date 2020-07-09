import React from 'react';
import './comment.css'
import { PropTypes } from 'prop-types';

function Comment(props) {
    return (
        <div className='comment'>
            <div className='comment__from'>{props.from}</div>
            <div className='comment__body'>{props.body}</div>
            <hr style={{color: 'white', width: '100%'}} />
        </div>
    )
}

Comment.propTypes = {
    from: PropTypes.string,
    body: PropTypes.string,
}

export default Comment