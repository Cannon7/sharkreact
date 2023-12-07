import React, { useState } from 'react';

function Nav() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className={`navigation ${isResponsive ? 'responsive' : ''}`}>
      <a className="ham" href="#" onClick={toggleMenu}>
        &#9776;
      </a>
      <a href="./home">Home</a>
      <a href="./about">About</a>
      <a href="./contact">Contact</a>
      <a href="./profile">Profile</a>
      <a href="./mylends">My Lends</a>
      <a href="./myhistory">History</a>
    </nav>
  );
}

export default Nav;