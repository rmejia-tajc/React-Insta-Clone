import React from "react";
import './Comment.css';
import PropTypes from "prop-types";
import styled, { css } from 'styled-components';

const I = styled.i`
    font-size: 2rem;
`

const H3 = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;

    ${props => props.likes && css`
        margin-bottom: 20px;
    `};
`

const CommentSectionDiv = styled.div`
    width: 95%;
    margin: 0 auto;
`

const LikeCommentDiv = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    width: 60px;
`

const CommentLi = styled.li`
    display: flex;
    align-items: baseline;
    margin-bottom: 10px;
`

const CommentTextP = styled.p`
    font-size: 1.4rem;
    margin-left: 8px;
`

const AddCommentInput = styled.input`
    width: 100%;
    text-align: start;
    border: 0px;
    border-top: 1px solid lightgrey;
    padding: 10px 0;
    margin: 10px 0;
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
            <CommentSectionDiv className="commentSection">
        
                <div>
                    <LikeCommentDiv className="likeComment">
                        <I onClick={this.upLikes} className="far fa-heart"></I>
                        <I className="far fa-comment"></I>
                    </LikeCommentDiv>

                    <H3 likes className="likes">{this.state.likes} likes</H3>

                </div>
        
                <ul>
                    {this.state.comments.map(({ username, text }, index) => (
        
                        <CommentLi className="comment" key={index}>
                        <H3 className="commentUser">{username}</H3>
                        <CommentTextP className="commentText">{text}</CommentTextP>
                        </CommentLi>
        
                    ))}
                </ul>
        
                <form onSubmit={this.addNewComment}>
                    <AddCommentInput 
                        className="addComment"
                        type="text"
                        name="newComment" 
                        placeholder="Add a comment..."
                        value={this.state.newComment}
                        onChange={this.changeHandler}
                    />
                </form>
        
            </CommentSectionDiv>

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