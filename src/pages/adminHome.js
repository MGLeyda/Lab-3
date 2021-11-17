import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

function AdminHome(){
    handleSubmit = event => {
        event.preventDefault()
        alert(`Welcome ${this.state.Username} ${this.state.password}!`)
      }
    return (
        <form onSubmit={this.handleSubmit}>
          <h1>Admin. Home</h1>
          <br />
          <button type="submit">Create New Poll</button>
        </form>
      )
}