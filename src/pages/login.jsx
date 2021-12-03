import * as React from "react";
import { Link } from "wouter";

window.onload=function(){
  
  const loginForm = document.getElementById("login-form");
  const loginSubmit = document.getElementById("login-submit");
  
  loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "username" && password == "password") {
        document.location.href = '#/admin'
    } else {
        alert("Incorrect username or password");
    }
  })
  
}

const handleUser =() =>{
    Link('/user/')
  }
 

export default function Login() {
  
  return (
    <>
      <div className="login">
  
        <div className= "login-container">
          
          <div className= "logo-center">
              <img src= "https://cdn.glitch.me/2ff53dc8-e3b1-441e-bceb-e3f1c30c99ee%2Fe060bdcf79274564b72fcd81382b9a04.png?v=1638398285109"></img>
          </div>
          
          <div className= "login-center">
            <h2>Login</h2>
            <hr></hr>
            <form id= "login-form">
              <input id= "username" type="text" placeholder="username" name="username" required></input>
              <input id= "password" type="text" placeholder="password" name="password" required></input>
              <button id= "login-submit" type="submit"> Login </button>
            </form>
            <Link href="/user"><a className="active">Click here if you are a user</a></Link>
          </div>
          
        </div>
      </div>
    </>
  );
}


