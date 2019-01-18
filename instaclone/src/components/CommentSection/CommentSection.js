import React from "react";
import './Comment.css';
import PropTypes from "prop-types";
import styled from 'styled-components';

const I = styled.i`
    font-size: 2rem;
`

const H3 = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
`

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [...props.post.comments],
            likes: props.post.likes,
            timestamp: props.post.timestamp,
            addNewComment: props.addNewComment,
            newComment: ''
        }
    }

    addNewComment = (event) => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments,
                {text: this.state.newComment,
                    username: localStorage.getItem('username')
                }],
                newComment: ''
            }) 
        };

    changeHandler = (event) => {
        this.setState({
            newComment: event.target.value
        })
        };   
        
    upLikes = event => {
        this.setState({
            likes: this.state.likes + 1
        })
    };

    render () {
        return (
            <div className="commentSection">
        
                <div>
                    <div className="likeComment">
                        <I onClick={this.upLikes} className="far fa-heart"></I>
                        <I className="far fa-comment"></I>
                    </div>

                    <H3 className="likes">{this.state.likes} likes</H3>

                </div>
        
                <ul>
                    {this.state.comments.map(({ username, text }, index) => (
        
                        <li className="comment" key={index}>
                        <H3 className="commentUser">{username}</H3>
                        <p className="commentText">{text}</p>
                        </li>
        
                    ))}
                </ul>
        
                <form onSubmit={this.addNewComment}>
                    <input 
                        className="addComment"
                        type="text"
                        name="newComment" 
                        placeholder="Add a comment..."
                        value={this.state.newComment}
                        onChange={this.changeHandler}
                    />
                </form>
        
            </div>

        );
    }
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default CommentSection;