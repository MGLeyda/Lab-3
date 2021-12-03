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

// THESE VARIABLES CONTAIN THE DATA FROM FIREBASE
var pollTitle = "default";
var pollLocation = "default";
var pollTimeZone = "NTZ";
var pollNotes = "";
var pollDateDD = "01";
var pollDateMM = "01";
var pollDateYY = "2022";
var pollStartTimeHH = "01";
var pollStartTimeMM = "01";
var pollStartAMPM = "AM";
var pollEndTimeHH = "01";
var pollEndTimeMM = "01";
var pollEndAMPM = "AM";
var pollTimeSlots = "1";
var pollRestrictVotesPerson = "na";
var pollRestrictVotesPoll = "na";
var pollRemind = "na";
var pollInvite = "na";

// Getting data from Firebase
const dbRef = ref(getDatabase());
  get(child(dbRef, "/")).then((snapshot) => {
    get(child(dbRef, "/title")).then((snapshot) => {
      if (snapshot.exists()) {
        pollTitle = snapshot.val();
        console.log(pollTitle);
      } 
    })
    get(child(dbRef, "/location")).then((snapshot) => {
      if (snapshot.exists()) {
        pollLocation = snapshot.val();
        console.log(pollLocation);
      } 
    })
    get(child(dbRef, "/timeZone")).then((snapshot) => {
      if (snapshot.exists()) {
        pollTimeZone = snapshot.val();
        console.log(pollTimeZone);
      } 
    })
    get(child(dbRef, "/notes")).then((snapshot) => {
      if (snapshot.exists()) {
        pollNotes = snapshot.val();
        console.log(pollNotes);
      } 
    })
    get(child(dbRef, "/dateDD")).then((snapshot) => {
      if (snapshot.exists()) {
        pollDateDD = snapshot.val();
        console.log(pollDateDD );
      } 
    })
    get(child(dbRef, "/dateMM")).then((snapshot) => {
      if (snapshot.exists()) {
        pollDateMM = snapshot.val();
        console.log(pollDateMM );
      } 
    })
    get(child(dbRef, "/dateYY")).then((snapshot) => {
      if (snapshot.exists()) {
        pollDateYY= snapshot.val();
        console.log(pollDateYY );
      } 
    })
    get(child(dbRef, "/startTimeHH")).then((snapshot) => {
      if (snapshot.exists()) {
        pollStartTimeHH= snapshot.val();
        console.log(pollStartTimeHH );
      } 
    })
    get(child(dbRef, "/startTimeMM")).then((snapshot) => {
      if (snapshot.exists()) {
        pollStartTimeMM= snapshot.val();
        console.log(pollStartTimeHH);
      } 
    })
    get(child(dbRef, "/startAMPM")).then((snapshot) => {
      if (snapshot.exists()) {
        pollStartAMPM= snapshot.val();
        console.log(pollStartAMPM );
      } 
    })
        get(child(dbRef, "/endTimeHH")).then((snapshot) => {
      if (snapshot.exists()) {
        pollEndTimeHH= snapshot.val();
        console.log(pollEndTimeHH );
      } 
    })
    get(child(dbRef, "/endTimeMM")).then((snapshot) => {
      if (snapshot.exists()) {
        pollEndTimeMM= snapshot.val();
        console.log(pollEndTimeHH);
      } 
    })
    get(child(dbRef, "/endAMPM")).then((snapshot) => {
      if (snapshot.exists()) {
        pollEndAMPM= snapshot.val();
        console.log(pollEndAMPM );
      } 
    })
    get(child(dbRef, "/timeSlots")).then((snapshot) => {
      if (snapshot.exists()) {
        pollTimeSlots= snapshot.val();
        console.log(pollTimeSlots );
      } 
    })
    get(child(dbRef, "/restrictVotesPoll")).then((snapshot) => {
      if (snapshot.exists()) {
        pollRestrictVotesPoll= snapshot.val();
        console.log(pollRestrictVotesPoll);
      } 
    })
    get(child(dbRef, "/restrictVotesPerson")).then((snapshot) => {
      if (snapshot.exists()) {
        pollRestrictVotesPerson= snapshot.val();
        console.log(pollRestrictVotesPerson);
      } 
    })
    get(child(dbRef, "/invite")).then((snapshot) => {
      if (snapshot.exists()) {
        pollInvite= snapshot.val();
        console.log(pollInvite);
      } 
    })
    get(child(dbRef, "/remind")).then((snapshot) => {
      if (snapshot.exists()) {
        pollRemind= snapshot.val();
        console.log(pollRemind);
      } 
    })
  })

export default function user(){


return(
    <div className="login-container">
    <h2><div> {pollTitle} </div></h2>
        <hr></hr>   
      <label>Location: {pollLocation}</label> <br />
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
  
}
