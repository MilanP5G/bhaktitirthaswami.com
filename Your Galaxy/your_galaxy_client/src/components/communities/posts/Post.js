import React, { Component } from 'react'
import '../../../styling/Post.css'

class Post extends Component {

  handleClick = () => {
    this.props.deletePost(this.props.id)
  }


  render() {
    const { post } = this.props;

    return (
      <div className='postCard'>
          <h1>{post.title}</h1>
          <br></br>
          {post.content}
          <br></br>
          <button onClick={this.handleClick}> Delete </button>
      </div>
    );
  }
};

export default Post;
