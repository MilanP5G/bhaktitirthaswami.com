import React, { useState } from 'react'
import { addPost } from '../../../actions/PostAction'
import { connect } from 'react-redux'


const PostForm = props => {
  const [state, setState] = useState({
    title: '',
    content: ''

 })

  const handleSubmit = event => {
    event.preventDefault();
    props.addPost(state)
    setState({
      title: '',
      content: ''
    });
    props.history.push(`/community`)
  }

  const handleChange = (event) => {
    setState({
      ...state, [event.target.name]: event.target.value
    })
  }

  const value = state.value

    return (
      <div>
      <label>Galaxy Community</label>
       <form onSubmit={handleSubmit}>
        <p>Post Title:</p>
        <input
          type='text'
          name='title'
          placeholder='Post Title'
          onChange={handleChange}
          value={value}
        />
        <textarea
          type='text'
          name='content'
          cols='30'
          rows='5'
          placeholder='Write your content here...'
          onChange={handleChange}
          value={value}
        />
        <button type='submit'>Submit</button>
       </form>
      </div>
    );
}

export default connect(null, { addPost })(PostForm)
