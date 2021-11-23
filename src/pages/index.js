import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminPage from "./adminHome.js";
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
    <Router>
      <main>
        <nav>
          <ul>
          <li><a href = "/adminHome.js">AdminPage</a></li>
          </ul>
        </nav>
        <Route path = "/adminHome.js" component={AdminPage} />
      </main>
    </Router>
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
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