import React, {useState} from "react";
import {Link} from "wouter";
import { getDatabase ,ref,child, onValue,get,set} from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi6t1kibbzrOj_C9LLLzhRWdOaCKiBX58",
  authDomain: "lab3-38879.firebaseapp.com",
  projectId: "lab3-38879",
  storageBucket: "lab3-38879.appspot.com",
  messagingSenderId: "1014814259943",
  appId: "1:1014814259943:web:5588dba17469659373c042"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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


export default function user(){


return(
    <div className="login-container">
    <h2><div> Example Title </div></h2>
        <hr></hr>   
      <label>Location: Seaman's Center</label> <br />
      <label> Your Name: </label> 
      <input></input>
      <br />
    
      <label> Date: 11/12/21</label> <br />
    <label>
      <input type = "checkbox" />
      10:00 AM - 12:00 PM
    </label>
    <br />
     <label>
      <input type = "checkbox" />
      12:00 PM - 2:00 PM
    </label>
    <br />
     <label>
      <input type = "checkbox" />
      2:00 PM - 3:00 PM
    </label>
    
    <br /><br />
    
    <label> Date: 11/13/21</label> <br />
    <label>
      <input type = "checkbox" />
      10:00 AM - 12:00 PM
    </label>
    <br />
     <label>
      <input type = "checkbox" />
      12:00 PM - 2:00 PM
    </label>
    <br />
     <label>
      <input type = "checkbox" />
      2:00 PM - 3:00 PM
    </label>
    
    <br /><br />
    <label> Date: 11/14/21</label> <br />
    <label>
      <input type = "checkbox" />
      10:00 AM - 12:00 PM
    </label>
    <br />
     <label>
      <input type = "checkbox" />
      12:00 PM - 2:00 PM
    </label>
    <br />
     <label>
      <input type = "checkbox" />
      2:00 PM - 3:00 PM
    </label>
    <br /><br />
    <button>Done</button>
    </div>
      
);
  
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
  
}