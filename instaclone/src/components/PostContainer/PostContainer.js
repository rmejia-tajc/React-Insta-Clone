import React from "react";
import './Post.css';
import PostContent from "./PostContent"
import CommentSection from "../CommentSection/CommentSection"
import PropTypes from "prop-types";

function PostContainer (props) {
    return (
        <div>
            {props.postList.map((post, index) => {
                return (
                    <div className="postWindow" key={index}>
                        <PostContent
                            post={post}
                            key={index}
                        />
                        <CommentSection
                            likes={post.likes}
                            commentsArray={post.comments}
                        />
                    </div>
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