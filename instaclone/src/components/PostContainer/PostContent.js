import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';


function PostContent(props) {
    return (
        <div className="postContent">
        
            <div className="userTitle">
                <img className="userThumb" src={props.post.thumbnailUrl} alt={`${props.post.username} thumbnail`} />
                
                <h3 className="userName">{props.post.username}</h3>
            </div>

            <img className="postImg" src={props.post.imageUrl} alt='main post' />

        </div>
    );
}


PostContent.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf (
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string,
            }),
        )
    })
}








export default PostContent;
