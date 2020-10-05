import React, { Component } from 'react'
import Posts from '../components/communities/posts/Posts'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/PostAction'

class PostsContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        <Posts posts={this.props.posts} deletePosts={this.props.deletePosts}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})
//
// const mapDispatchToProps = dispatch => ({
//   addPhone: payload => dispatch({ type: 'ADD_PHONE', payload }),
//   deletePhone: id => dispatch({ type: 'DELETE_PHONE', id }),
//   fetchPhones
// })


export default connect(mapStateToProps, { fetchPosts })(PostsContainer)
