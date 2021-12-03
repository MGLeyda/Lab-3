import * as React from "react";
import {Link} from "wouter";
import {useLocation} from "wouter";

const handleNewPoll = () =>{
        window.location.replace('#/new-poll')
}

const handleEditPoll = () =>{
        window.location.replace('#/edit-poll')
}

export default function Admin() {
  
  const [location, setLocation] = useLocation();
 const navigate = () => {
    setLocation("/");
  };
  
  return (
    <div className="admin">
      <div className= "logo-center">
              <img src= "https://cdn.glitch.me/2ff53dc8-e3b1-441e-bceb-e3f1c30c99ee%2Fe060bdcf79274564b72fcd81382b9a04.png?v=1638398285109"></img>
          </div>
      <h1>Welcome Admin!</h1>
      <div className= "button-center">
        <button id= "create-poll" type="submit" onClick={handleNewPoll}> Create Poll </button>
        <button id= "edit-poll" type="submit" onClick={handleEditPoll}> Edit Poll </button>
        <button id= "view-poll" type="submit"> View Poll </button>
        <button id= "logout" type="submit" onClick={() => navigate()}> Logout </button>
      </div>
    </div>
  );
}