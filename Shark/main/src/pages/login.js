import Header from "../components/header.js";
import Footer from "../components/footer.js";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => setUsers(users)); 
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {/* Display users */}
    </div>
  );
}

export default Login;