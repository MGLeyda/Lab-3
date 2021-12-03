import * as React from "react";
import { Link } from "wouter";
import {useState} from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDi6t1kibbzrOj_C9LLLzhRWdOaCKiBX58",
  authDomain: "lab3-38879.firebaseapp.com",
  projectId: "lab3-38879",
  storageBucket: "lab3-38879.appspot.com",
  messagingSenderId: "1014814259943",
  appId: "1:1014814259943:web:5588dba17469659373c042"
};

const app = initializeApp(firebaseConfig);
const editPoll = document.getElementById("edit-poll");

const dbRef = ref(getDatabase());
get(child(dbRef, "/")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

function EditPoll(props) {
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
      
      <div className ="edit">
        <h1>New Poll</h1>
        <div className= "logo-center">
          <img src= "https://cdn.glitch.me/2ff53dc8-e3b1-441e-bceb-e3f1c30c99ee%2Fe060bdcf79274564b72fcd81382b9a04.png?v=1638398285109"></img>
        </div>
        <br />
        <label style = {{color: "red"}}>
        '*' indicates required field
        </label>
        <br />
        <form id= "edit-poll">
        <label >
          Title*:    
          <input
            id="title"
            type="text"
            name="title"
            value="title"
          />
        </label>
        <br />
        <label>
          Location:  
          <input
            id="location"
            type="text"
            name="location"
          />
        </label>
        <br />
         <label>Time Zone </label> 
         <select id="timeZone">
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
        <textarea id="notes" name="Text1" cols="40" rows="5"></textarea>
        <br />
        <label style = {{color: "red"}}>At least one timeslot required </label>
        {inputList.map((x,index)=> {
        return (
          <div>  
            Date*: 
            <select id="dateMM">
              <option value = "01">01</option>
              <option value = "02">02</option>
              <option value = "03">03</option>
              <option value = "04">04</option>
              <option value = "05">05</option>
              <option value = "06">06</option>
              <option value = "07">07</option>
              <option value = "08">08</option>
              <option value = "09">09</option>
              <option value = "10">10</option>
              <option value = "11">11</option>
              <option value = "12">12</option>
            </select>
            /
            <select id="dateDD">
              <option value = "01">01</option>
              <option value = "02">02</option>
              <option value = "03">03</option>
              <option value = "04">04</option>
              <option value = "05">05</option>
              <option value = "06">06</option>
              <option value = "07">07</option>
              <option value = "08">08</option>
              <option value = "09">09</option>
              <option value = "10">10</option>
              <option value = "11">11</option>
              <option value = "12">12</option>
              <option value = "13">13</option>
              <option value = "14">14</option>
              <option value = "15">15</option>
              <option value = "16">16</option>
              <option value = "17">17</option>
              <option value = "18">18</option>
              <option value = "19">19</option>
              <option value = "20">20</option>
              <option value = "21">21</option>
              <option value = "22">22</option>
              <option value = "23">23</option>
              <option value = "24">24</option>
              <option value = "25">25</option>
              <option value = "26">26</option>
              <option value = "27">27</option>
              <option value = "28">28</option>
              <option value = "29">29</option>
              <option value = "30">30</option>
              <option value = "31">31</option>
            </select>
            /
            <select id="dateYY">
              <option value = "2021">2021</option>
              <option value = "2022">2022</option>
              <option value = "2023">2023</option>
              <option value = "2024">2024</option>
              <option value = "2025">2025</option>
              <option value = "2026">2026</option>
              <option value = "2027">2027</option>
              <option value = "2028">2028</option>
              <option value = "2029">2029</option>
              <option value = "2030">2030</option>
            </select>
            <br />
            Start Time*: 
            <select id="startTimeHH">
              <option value = "01">01</option>
              <option value = "02">02</option>
              <option value = "03">03</option>
              <option value = "04">04</option>
              <option value = "05">05</option>
              <option value = "06">06</option>
              <option value = "07">07</option>
              <option value = "08">08</option>
              <option value = "09">09</option>
              <option value = "10">10</option>
              <option value = "11">11</option>
              <option value = "12">12</option>
            </select>
            <select id="startTimeMM">
              <option value = "00">00</option>
              <option value = "05">05</option>
              <option value = "10">10</option>
              <option value = "15">15</option>
              <option value = "20">20</option>
              <option value = "25">25</option>
              <option value = "30">30</option>
              <option value = "35">35</option>
              <option value = "40">40</option>
              <option value = "45">45</option>
              <option value = "50">50</option>
              <option value = "55">55</option>
            </select>
            <select id="startAMPM">
              <option value = "AM">AM</option>
              <option value = "PM">PM</option>
            </select>  
            <br />
            End Time*: 
            <select id="endTimeHH">
              <option value = "01">01</option>
              <option value = "02">02</option>
              <option value = "03">03</option>
              <option value = "04">04</option>
              <option value = "05">05</option>
              <option value = "06">06</option>
              <option value = "07">07</option>
              <option value = "08">08</option>
              <option value = "09">09</option>
              <option value = "10">10</option>
              <option value = "11">11</option>
              <option value = "12">12</option>
            </select>
            <select id="endTimeMM">
              <option value = "01">01</option>
              <option value = "02">02</option>
              <option value = "03">03</option>
              <option value = "04">04</option>
              <option value = "05">05</option>
              <option value = "06">06</option>
              <option value = "07">07</option>
              <option value = "08">08</option>
              <option value = "09">09</option>
              <option value = "10">10</option>
              <option value = "11">11</option>
              <option value = "12">12</option>
            </select>      
            <select id="endAMPM">
              <option value = "AM">AM</option>
              <option value = "PM">PM</option>
            </select> 
            <br />
            Number of Time Slots during this time period*: 
            <input
              id="timeSlots"
              type="text"
              name="timeSlots"
            />
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
         <select id= "restrictVotesPoll">
            <option value = "na">No Restriction</option>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
        </select>
        <br />
        <label>Restrict Number of Votes per Participant: </label> 
         <select id="restrictVotesPerson">
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
            id="invite"
            type="text"
            placeholder = "hawkid@uiowa.edu"
            name="invite"
          />
        </label> 
        <br /> 
        
        <label> Remind Participant(s): </label>
        <select id= "remind">
            <option value = "na">No Reminder</option>
            <option value = "2d">2 days before</option>
            <option value = "1d">1 day before</option>
            <option value = "2h">2 hours before</option>
            <option value = "4">1 hour before</option>
            <option value = "5">10 minutes before</option>
        </select>
        <br />
           
        <br />
      </form>
        <button id="publish" type="publish" onClick={handlePublish}>Publish</button> 
        <button id="delete" type="delete" onClick={handleDelete}>Delete Poll</button> 
      </div>
    )
  } 

    const handlePublish = ()=> {
      
        const editPoll = document.getElementById("create-poll");
        const title = editPoll.title.value = "title";
        const location = editPoll.location.value;
        const timeZone = editPoll.timeZone.value;
        const notes = editPoll.notes.value;
        const dateMM = editPoll.dateMM.value;
        const dateDD = editPoll.dateDD.value;
        const dateYY= editPoll.dateYY.value;
        const startTimeHH = editPoll.startTimeHH.value;
        const startTimeMM = editPoll.startTimeMM.value;
        const startAMPM= editPoll.startAMPM.value;
        const endTimeHH = editPoll.endTimeHH.value;
        const endTimeMM = editPoll.endTimeMM.value;
        const endAMPM= editPoll.endAMPM.value;
        const timeSlots= editPoll.timeSlots.value;
        const restrictVotesPoll= editPoll.restrictVotesPoll.value;
        const restrictVotesPerson= editPoll.restrictVotesPerson.value;
        const invite= editPoll.invite.value;
        const remind= editPoll.remind.value;
      
        const db = getDatabase();
        set(ref(db, '/'), {
          title: title,
          location: location,
          timeZone: timeZone,
          notes: notes,
          dateMM : dateMM,
          dateDD : dateDD,
          dateYY : dateYY,
          startTimeHH : startTimeHH,
          startTimeMM : startTimeMM,
          startAMPM : startAMPM,
          endTimeHH : endTimeHH,
          endTimeMM : endTimeMM,
          endAMPM : endAMPM,
          timeSlots : timeSlots,
          restrictVotesPoll : restrictVotesPoll,
          restrictVotesPerson : restrictVotesPerson,
          invite : invite,
          remind : remind,
        });

    }
    
    const handleDelete = ()=> {
      
        const db = getDatabase();
        set(ref(db, '/'), {
          title: "",
          location: "",
          timeZone: "",
          notes: "",
          dateMM : "",
          dateDD : "",
          dateYY : "",
          startTimeHH : "",
          startTimeMM : "",
          startAMPM : "",
          endTimeHH : "",
          endTimeMM : "",
          endAMPM : "",
          timeSlots : "",
          restrictVotesPoll : "",
          restrictVotesPerson : "",
          invite : "",
          remind : "",
        });

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
export default EditPoll;
