import React from 'react';
import './comment.css'

function Comment(props) {
    return (
        <div className='comment'>
            <div className='comment__from'>{props.from}</div>
            <div className='comment__body'>{props.body}</div>
            <hr style={{color: 'white', width: '100%'}} />
        </div>
    )
}

export default Comment