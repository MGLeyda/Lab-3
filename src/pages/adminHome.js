import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class AdminPage extends React.Component {

    handleCreate = event => {
        event.preventDefault()
        alert(`Create Button Pressed`)
    }

    render(){
        return(
            <form onCreate = {this.handleCreate}>
                <h1>Admin Home</h1>
                <br />
                <button type="create">Create New Poll</button>
            </form>
        )
    }
}