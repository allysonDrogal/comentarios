
import { Component } from 'react';
import React from 'react';
import Comments from './Comments';

class App extends Component {
  state = {
    newComment: '',
    comments: [
      'This is a great post!',
      'I learned a lot from this article.',
      'Thanks for sharing your insights.',
      'I disagree with some points, but overall a good read.',
      'Can you elaborate on the second point?',
    ]
  }

  sendComment = () => {
    this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: ''
    })
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <textarea
          value={this.state.newComment}
          onChange={this.handleChange}
          type="text" placeholder="Type your comment here..." />
        <button onClick={this.sendComment}>Submit</button>

        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
