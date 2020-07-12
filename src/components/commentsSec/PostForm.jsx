import React from 'react';
import { connect } from 'react-redux';
import './PostForm.css';
import { useState } from 'react';
import { myApiEND } from './../../constants';
import { getComments, getError } from '../../actions/myApiActions';
import { PropTypes } from 'prop-types';

function PostForm(props) {
    const { token, id, name, getComments, getError } = props;

    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (token.length > 0 && name.length > 0) {
            try {
                fetch(myApiEND + 'comment', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: id,
                        comment: comment,
                        from: name
                    })
                }).then(() => {
                    getComments(id);
                    setComment('');
                })
            }
            catch (err) {
                console.log(new Error(err));
            }
        }
        else {
            getError('Login to post comments');
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
};

const mapDispatchToProps = dispatch => {
    return {
        getComments: (id) => dispatch(getComments(id)),
        getError: (msg) => dispatch(getError(msg)),
    }
};

PostForm.propTypes = {
    token: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    getComments: PropTypes.func,
    getError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)