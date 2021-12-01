import React, { useState } from 'react';
import { navigate } from 'gatsby';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = event => {
      if(username === 'username' && password === 'password'){
        navigate('/Dashboard/')
      }
  }

  function pageRedirect(){
    window.location.replace('/user/')
  }

  const handleUser =() =>{
    navigate('/user/')
  }
 
  return (
    <center>
    <div>
    <h1 style={{color: "green"}}>Login</h1>
      <div>
        Username<br />
        <input type="text" onChange = {event => setUsername(event.target.value)}/>
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" onChange = {event => setPassword(event.target.value)}/>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      <div style ={{marginTop: 10}}>
      <button onClick={handleUser} >New user</button> 
        </div>
    </div>
    </center>
  )
  
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
export default Login;
