import React from "react";
import Comment from "./Comment";

const Comments = ({comments}) => {
    const keys = Object.keys(comments);
    return (
      <div className="comments">
        <h2>Comentarios</h2>
          <div className="comment">
            <h4>{keys.map(key => <Comment key={key} comment={comments[key]}/>)} </h4>
          </div>
      </div>
    )
}

export default Comments;