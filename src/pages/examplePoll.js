import React, {useState} from "react";

function examplePoll(props){
    const title = "Example Poll";
    const location = "Seaman's Center";
    const timezone = "Central Standard Time";

    // time block 1
    const date1MM = "11";
    const date1DD = "29";
    const date1YY = "21";

    const starttime1HH = "12";
    const starttime1MM = "00";
    const amorpm1 = "PM";

    const endime1HH = "1";
    const endtime1MM = "00";
    const amorpm = "PM";

    const numSlots1 = "1";

    const starttime2HH = "1";
    const starttime2MM = "00";
    const amorpm2s = "PM";

    const endime2HH = "2";
    const endtime2MM = "00";
    const amorpm2e = "PM";

    const handleDone = ()=> {
       
    }

    return (
        <div>
            <h1> Example Poll</h1>
            <br />
            <label>Location: Seaman's Center</label>
            <br /> 
            <label>Central Standard Time</label>
            <br />
            <br />
            <label> Date: 11/29/21 </label>
            <br />
            12:00 PM - 1:00 PM  :
            
            <input 
            
            />
            <br />
            1:00 PM - 2:00 PM  :

            <input 

            />

            <br /><br />
            <button>Done</button>
        </div>

    )
}
export default examplePoll;