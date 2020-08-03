import React, { useState } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import './CommentSec.css'
import PostForm from './PostForm';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

function CommentsSec({ comments }) {    
    const [counter, setCounter] = useState(5);
    const [reversed, setReversed] = useState([]);

    useEffect(() => {
        const clientComments = comments;
        setReversed(clientComments.reverse())
    }, [comments])

    const handleShowMore = () => {
        if (counter < comments.length) {
            setCounter(counter + 5)
        }
    };

    return (
        <div className='commenstSec'>
            {comments.length > 0 ?
                reversed.slice(0, counter)
                    .map(i => <Comment key={i._id} from={i.from} body={i.comment} date={i.date} />)
                :
                undefined
            }
            {reversed.length <= 5 || counter >= reversed.length ? undefined :
                <button className='commentsSec__btn' onClick={handleShowMore}>Show more comments</button>
            }

            <PostForm />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

CommentsSec.propTypes = {
    comments: PropTypes.array,
}


export default connect(mapStateToProps, null)(CommentsSec)