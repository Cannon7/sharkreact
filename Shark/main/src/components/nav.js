import React, { useState } from 'react';

function Nav() {
    const [isShown, setIsShown] = useState(false);
  
    const toggleMenu = () => {setIsShown(!isShown);};
    return (
      <nav className={`navigation ${isShown ? 'shown' : ''}`}>
        <a className="ham" href="#" onClick={toggleMenu}>&#9776;</a>
        <a href="./home">Home</a>
        <a href="./about">About</a>
        <a href="./contact">Contact</a>
        <a href="./profile">Profile</a>
        <a href="./mylends">My Lends</a>
        <a href="./myhistory">History</a>
        </nav>
    );
};

export default Nav;