import Header from "../components/header.js";
import Footer from "../components/footer.js";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users)); 
  }, []);

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  
    return (
        <div>
            <Header />
            <h2>Login</h2>
            <form>
                <label for="username-field">Username:</label>
                <input id="username-field" type="text" value={username} onChange={(e) => setName(e.target.value)} />
                <label for="password-field">Password:</label>
                <input id="password-field" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
            </form>    
            <p>Forgot Password? (Will be a link)</p>
            <Footer />
        </div>
    )
}

export default Login;