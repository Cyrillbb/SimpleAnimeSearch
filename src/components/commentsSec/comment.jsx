import React from 'react';
import './comment.css'
import { PropTypes } from 'prop-types';

function Comment({ from, body }) {
    return (
        <div className='comment'>
            <div className='comment__from'>{from}</div>
            <div className='comment__body'>{body}</div>
            <hr style={{ color: 'white', width: '100%' }} />
        </div>
    )
}

Comment.propTypes = {
    from: PropTypes.string,
    body: PropTypes.string,
}

export default Comment