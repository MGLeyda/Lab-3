import React from "react"
export default class PollFormPage extends React.Component {
  state = {
    Title: "",
    Location: "",
    Notes: "",
    RestrictVperPoll: "",
    RestrictVperPar: "",
    Invite: "",
    DateFrom: "",
    DateTo: "",
    Remind: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handlePublish = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.title} ${this.state.location}`)
  }
  render() {
    return (
      <form onSubmit={this.handlePublish}>
        <h1>New Poll</h1>
        <br />
        <label>
          Title:    
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:  
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
         <label>Time Zone </label> 
         <select>
            <option value = "def">No Time Zone</option>
            <option value = "CT">Central Standard Time</option>
            <option value = "MT">Moutain Standard Time</option>
            <option value = "PT">Pacific Standard Time</option>
            <option value = "AT">Alaska Standard Time</option>
            <option value = "HT">Hawaii-Aleutian Standard Time</option>
        </select>
        <br />
        <label>Notes/Comments: </label>
        <br />
        <textarea name="Text1" cols="40" rows="5"></textarea>
        <br />
        <label>Dates</label>
          <br />
          <label>
          From:
          <input
            type="text"
            name="datefrom"
            value={this.state.datefrom}
            onChange={this.handleInputChange}
          />
          </label>
          <br />
          <label>
          To:  
          <input
            type="text"
            name="datefrom"
            value={this.state.dateto}
            onChange={this.handleInputChange}
          />
          </label>
          <br />
        <label>Restrict Number of Votes per Poll: </label> 
         <select>
            <option value = "na">No Restriction</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
        </select>
        <br />
        <label>Restrict Number of Votes per Participant: </label> 
         <select>
            <option value = "na">No Restriction</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
        </select>
        <br />
        <label>
          Invite Participant(s):  
          <input
            type="text"
            name="invite"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label for="myCheck"></label> 
        <input type="checkbox" id="myCheck" onclick="myFunction()"/>

        <label> Remind Participant(s):  </label>
        <br />
        <button type="publish">Publish</button> 
      </form>
    )
  }
}