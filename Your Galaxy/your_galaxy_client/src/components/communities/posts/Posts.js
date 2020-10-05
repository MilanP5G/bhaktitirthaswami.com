import React, { Component } from 'react'
import Post from './Post'

class Posts extends Component {

  render() {
    return (
      <div>
      {this.props.posts.map(post => (
        <Post post={post} key={post.id} deletePost={this.props.deletePost} />
      ))}
      </div>
    )
  }
}

export default Posts
