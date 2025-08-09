import React, { Component } from "react";

class NewComments extends Component {
  state = {
    newComment: ''
  }
  
  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  }

  sendComment = () => {
    this.props.sendComment(this.state.newComment);
    this.setState({ newComment: '' });
  }

  render() {
    return (
      <div>
        <textarea
          value={this.state.newComment}
          onChange={this.handleChange}
          type="text" placeholder="Type your comment here..." />
        <button onClick={this.sendComment}>Submit</button>
      </div>
    )
  }
}
export default NewComments;