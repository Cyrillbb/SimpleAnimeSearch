import React from 'react';
import { connect } from 'react-redux';
import './PostForm.css'
import { useState } from 'react';
import { myApiEND } from './../../constants';
import { getComments } from '../../actions/myApiActions';

function PostForm(props) {
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.token.length > 0 && props.name.length > 0) {
            try {
                fetch(myApiEND + 'comment', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Authorization': `Bearer ${props.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: props.id,
                        comment: comment,
                        from: props.name
                    })
                }).then(() => {
                    props.getComments(props.id)
                })
            }
            catch (err) {
                console.log(new Error(err))
            }
        }
    }

    return (
        <div>
            <form className='PostForm' onSubmit={handleSubmit}>
                <textarea className='PostForm__txt' name="" id="" cols="80" rows="5" value={comment} placeholder='write a comment...'
                    onChange={e => setComment(e.target.value)}
                ></textarea>
                <button className='PostForm__btn' type='submit'>Post a comment</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token,
        id: state.title.id,
        name: state.userName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getComments: (id) => dispatch(getComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)