import React from "react"

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
        <label>
          Username
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}