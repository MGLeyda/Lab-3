import React, {useState} from "react";

function PollForm(props) {
  const title = useFormInput('');
  const location = useFormInput('');
  const [timezone, setTimeZone] = useState(null);
  const notes = useFormInput('');
  const [restrictPoll, setRestrictPoll] = useState(null);
  const [restrictPar, setRestrictPar] = useState(null);
  const invite = useFormInput('');
  const remind = useFormInput('');
  const [inputList, setInputList] = useState([{dateMM: "", dateDD: "", dateYY:"", numSlots: "", startTimeHH: "", startTimeMM: "", endTimeHH: "", endTimeMM: ""}]);

  const handleInputChange = (event, index) => {
    const {name, value} = event.target;
    let list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddSlot = () => {
    setInputList([...inputList, {dateMM: "", dateDD: "", dateYY: "", numSlots: "", startTimeHH: "", startTimeMM: "", endTimeHH: "", endTimeMM: ""}]);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
    return (
      <div>
        <h1>New Poll</h1>
        <br />
        <label style = {{color: "red"}}>
        '*' indicates required field
        </label>
        <br />
        <label >
          Title*:    
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
        <label style = {{color: "red"}}>At least one timeslot required </label>
        {inputList.map((x,index)=> {
        return (
          <div>  
            Date*: 
            <input
              className = "dateMM"
              placeholder = "MM"
              name = "dateMM"
              value = {x.dateMM}
              onChange = {event => handleInputChange(event,index)} />
            /
            <input 
               className = "dateDD"
               placeholder = "DD"
               name = "dateDD"
               value = {x.dateDD}
               onChange = {event => handleInputChange(event,index)} 
            />
            /
            <input 
               className = "dateYY"
               placeholder = "YY"
               name = "dateYY"
               value = {x.dateYY}
               onChange = {event => handleInputChange(event,index)} 
            />
            <br />
            Start Time*: 
            <input
              className = "startTimeHH"
              name = "startTimeHH"
              placeholder = "HH"
              value = {x.startTimeHH}
              onChange = {event => handleInputChange(event, index)}/>

            :
            <input
              className = "startTimeMM"
              name = "startTimeMM"
              placeholder = "MM"
              value = {x.startTimeMM}
              onChange = {event => handleInputChange(event, index)}/>
            <select>
              <option value = "AM">AM</option>
              <option value = "PM">PM</option>
            </select>  
            <br />
            End Time*: 
            <input
              className = "endTimeHH"
              name = "endTimeHH"
              placeholder = "HH"
              value = {x.endTimeHH}
              onChange = {event => handleInputChange(event, index)}/>  
              :
              <input
              className = "endTimeMM"
              name = "endTimeMM"
              placeholder = "MM"
              value = {x.endTimeMM}
              onChange = {event => handleInputChange(event, index)}/>        
              <select>
              <option value = "AM">AM</option>
              <option value = "PM">PM</option>
            </select> 
            <br />
            Number of Time Slots during this time period*: 
            <input
              className = "numSlots" 
              name = "numSlots"
              placeholder = "1"
              value = {x.numSlots}
              onChange = {event => handleInputChange(event, index)}/>
            <div className = "removeSlot" >
            {inputList.length !== 1 && <button
                onClick={() => handleRemoveClick(index)}>Remove</button>}
            </div>
            <br />
            <div className = "addSlot" >
               {inputList.length - 1 === index && <button onClick={handleAddSlot}>Add New Time Block</button>}
            </div>
          </div>
        )})}
        
         
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
            placeholder = "hawkid@uiowa.edu"
            name="invite"
            onChange={handleInvite}
          />
        </label> 
        <br /> 
        
        <label> Remind Participant(s): </label>
        <select>
            <option value = "na">No Reminder</option>
            <option value = "2d">2 days before</option>
            <option value = "1d">1 day before</option>
            <option value = "2h">2 hours before</option>
            <option value = "4">1 hour before</option>
            <option value = "5">10 minutes before</option>
        </select>
        <br />
           
        <br />
        <button type="publish" onClick={handlePublish}>Publish</button> 
      </div>
    )
  }   
    
    const handlePublish = ()=> {
      
    }
   
    const handleTitle = () =>{
      
    }
  
    const handleLocation = () =>{
      
    }
  
    const handleTZ = event =>{

    
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