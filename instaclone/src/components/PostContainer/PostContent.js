import React from 'react';
import './Post.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ImgThumb = styled.img`
    border-radius: 50%;
    height: 32px;
    margin: 10px;
`

const ImgPost = styled.img`
    width: 100%;
`
const H3 = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
`

const Div = styled.div`
    display: flex;
    align-items: center;
`

function PostContent(props) {
    return (
        <div className="postContent">
        
            <Div className="userTitle">
                <ImgThumb className="userThumb" src={props.post.thumbnailUrl} alt={`${props.post.username} thumbnail`} />
                
                <H3 className="userName">{props.post.username}</H3>
            </Div>

            <ImgPost className="postImg" src={props.post.imageUrl} alt='main post' />

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
