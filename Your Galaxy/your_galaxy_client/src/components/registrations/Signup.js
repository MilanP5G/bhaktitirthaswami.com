import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {name, email, password} = this.state

    let user = {
      name: name,
      email: email,
      password: password
    }

    fetch('https://localhost:3001/login',
    { credentials: 'include' },
    {
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(resp => {
        if (resp.data.status === 'created') {
          this.props.handleLogin(resp.data)
            this.redirect()
          } else {
            this.setState({
              errors: resp.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  }

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
         <ul>
         {this.state.errors.map((error) => {
           return <li key={error}>{error}</li>
         })}
       </ul>
     </div>
    )
  }

  render() {
    const {name, email, password} = this.state

    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Log In</button>

        <div>
          or <Link to='/login'>Login</Link>
        </div>

        </form>
        <div>
          { this.state.errors ? this.handleErrors() : null }
        </div>
      </div>
    )
  }

}

export default Signup
