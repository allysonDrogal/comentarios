import React, {Component} from "react";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h4>{ this.props.comment.comment}</h4>
      </div>
    );
  }
}

export default Comment;