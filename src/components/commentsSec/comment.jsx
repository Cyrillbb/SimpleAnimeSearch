import React from 'react';
import './comment.css'
import { PropTypes } from 'prop-types';

function Comment({ from, body, date }) {
    return (
        <div className='comment'>
            <div className='comment__from'>{from} <span className='comment__date'>{date ? date.split('T')[0].split('-').slice(0, 3).reverse().join('.') : undefined}</span> </div>
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