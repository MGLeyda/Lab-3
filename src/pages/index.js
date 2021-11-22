import React from "react"
import { heading } from '../components/login.module.css'
export default class IndexPage extends React.Component {
  state = {
    Username: "",
    Password: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.Username} ${this.state.password}!`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 style="color:blue;margin:auto;">Login</h1>
        <br />
        <label>
          Username:    
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:  
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
     
        <button type="submit">Submit</button>
      </form>
    )
  }
}