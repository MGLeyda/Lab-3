import React from 'react';
import { navigate } from 'gatsby';

function Dashboard(props){
    
    const handleNewPoll = () =>{
        navigate('/pollForm/')
    }
    return (
        <center>
        <div>
            <h1>Administrative Dashboard</h1>
            <br /><br />
            <button type="newPoll" onClick={handleNewPoll} >Create New Poll</button> 
        </div>
        </center>
      );
}
export default Dashboard;