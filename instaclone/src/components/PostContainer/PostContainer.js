import React from "react";
import './Post.css';
import PostContent from "./PostContent"
import CommentSection from "../CommentSection/CommentSection"
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
    border: 1px solid lightgrey;
    background-color: white;
    width: 600px;
    margin-bottom: 40px;
`

function PostContainer (props) {
    return (
        <div>
            {props.postList.map((post, index) => {
                return (
                    <Div className="postWindow" key={index}>
                        <PostContent
                            post={post}
                            key={index}
                        />
                        <CommentSection
                            post={post}
                        />
                    </Div>
                )
            })}
        </div>
  );
}  


PostContainer.propTypes = {
    postList: PropTypes.arrayOf (
        PropTypes.shape({
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
    )
}


export default PostContainer