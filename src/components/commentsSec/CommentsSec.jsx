import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import './CommentSec.css'
import PostForm from './PostForm';

function CommentsSec(props) {
    return (
        <div className='commenstSec'>

            {props.comments.length > 0 ?
                props.comments.map(i => <Comment key={i._id} from={i.from} body={i.comment} />) :
                undefined
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



export default connect(mapStateToProps, null)(CommentsSec)