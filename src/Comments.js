import React, { Component } from "react";
import Comment from "./Comment";

class Comments extends Component {
  render() {
    const keys = Object.keys(this.props.comments);
    return (
      <div className="comments">
        <h2>Comentarios</h2>

       
          <div className="comment">
            <h4>{keys.map(key => <Comment key={key} comment={this.props.comments[key]}/>)} </h4>
          </div>
       
      </div>
    )
  }
}

export default Comments;