import React, {useState} from "react"

function PollForm(props) {
  const title = useFormInput('');
  const location = useFormInput('');
  const [timezone, setTimeZone] = useState(null);
  const notes = useFormInput('');
  const [restrictPoll, setRestrictPoll] = useState(null);
  const [restrictPar, setRestrictPar] = useState(null);
  const invite = useFormInput('');
  const remind = useFormInput('');

  const timezones = [
    {value: 1, label: "No Time Zone"},
    {value: 2, label: "Central Standard Time"},
    {value: 3, label: "Mountain Standard Time"},
    {value: 4, label: "Pacifc Standard Time"},
    {value: 5, label: "Alaska Standard Time"},
    {value: 6, label: "Hawaii-Aleutian Standard Time"},
    {value: 7, label: "Eastern Standard Time"}
  ];

    return (
      <div>
        <h1>New Poll</h1>
        <br />
        <label>
          Title:    
          <input
            type="text"
            name="title"
            onChange={handleTitle}
          />
        </label>
        <br />
        <label>
          Location:  
          <input
            type="text"
            name="location"
            onChange={handleLocation}
          />
        </label>
        <br />
         <label>Time Zone </label> 
         <select>
         <option value = "NTZ">No Time Zone</option>
            <option value = "CST">Central Standard Time</option>
            <option value = "MST">Mountain Standard Time</option>
            <option value = "PST">Pacifc Standard Time</option>
            <option value = "AST">Alaska Standard Time</option>
            <option value = "HST">Hawaii-Aleutian Standard Time</option>
            <option value = "EST">Eastern Standard Time</option>
        </select>
        <br />
        <label>Notes/Comments: </label>
        <br />
        <textarea name="Text1" cols="40" rows="5"></textarea>
        <br />
        <button type="newSlot" onClick={handleNewBlock}>Add New Time Block</button>

    
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
            onChange={handleInvite}
          />
        </label> 
        <br /> 

        <label for="myCheck"></label> 
        <input type="checkbox" id="myCheck" onclick="myFunction()"/>

        <label> Remind Participant(s):  </label>
        <br />
        <button type="publish" onClick={handlePublish}>Publish</button> 
        </div>
    )

    const handlePublish = ()=> {
      alert(`Welcome ${this.state.title} ${this.state.location}`)
    }
  
    const handleNewBlock = () => {
      <label>
        dynamic test
      </label>
    }
   
    const handleTitle = () =>{
      
    }
  
    const handleLocation = () =>{
      
    }
  
    const handleTZ = event =>{
      setTimeZone(event.value);
    }
    const handleNotes = () =>{
  
    }
  
    const handleRVPPoll = () =>{
  
    }
  
    const handlrRVPPar = () =>{
  
    }
  
    const handleInvite= () =>{
  
    }
  
    const handleRemid = () =>{
      
    }
}
    const useFormInput = initialValue => {
      const [value, setValue] = useState(initialValue);
     
      const handleChange = e => {
        setValue(e.target.value);
      }
      return {
        value,
        onChange: handleChange
      }
    }
export default PollForm;