import React from "react";
import './Comment.css';
import PropTypes from "prop-types";

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
                {text: this.state.newComm,
                    username: 'TESTUSER'
                }],
                newComment: '',
            }) 
        };

        changeHandler = (event) => {
            this.setState({
                newComm: event.target.value
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
                        <i onClick={this.upLikes} class="far fa-heart"></i>
                        <i class="far fa-comment"></i>
                    </div>

                    <h3 className="likes">{this.state.likes} likes</h3>

                </div>
        
                <ul>
                    {this.state.comments.map(({ username, text }, index) => (
        
                        <li className="comment" key={index}>
                        <h3 className="commentUser">{username}</h3>
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
                        value={this.state.newComm}
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