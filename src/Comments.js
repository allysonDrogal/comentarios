import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <h2>Comentarios</h2>

        {this.props.comments.map((comment, index) => (
          <div key={index} className="comment">
            <h4>{comment}</h4>
          </div>
        ))}
      </div>
    )
  }
}

export default Comments;