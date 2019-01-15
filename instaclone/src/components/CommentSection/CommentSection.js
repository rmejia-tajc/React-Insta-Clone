import React from "react";
import './Comment.css';
import PropTypes from "prop-types";

function CommentSection(props) {
  return (
    <div className="commentSection">

        <div>
            <h3 className="likes">{props.likes} likes</h3>
        </div>

        <ul>
            {props.commentsArray.map(({ username, text }, index) => (

                <li className="comment" key={index}>
                <h3 className="commentUser">{username}</h3>
                <p className="commentText">{text}</p>
                </li>

            ))}
        </ul>

        <form>
            <input className="addComment"
                type="text"
                name="titlevalue" 
                placeholder="Add a comment..."
            />
        </form>

    </div>
  );
}


CommentSection.propTypes = {
    commentsArray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default CommentSection;