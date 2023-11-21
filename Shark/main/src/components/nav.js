import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav class="navigation" >
{/*Added Hamburger Menu functionality, 
changed the list to a collection of nav 
elements to remove the bullet points- 
there may have been a better way to do 
that, but I don't know it*/}
            <a class="ham" href="#">&#9776;</a>
            <a href="./home">Home</a>
            <a href="./about">About</a>
            <a href="./contact">Contact</a>
            <a href="./profile">Profile</a>
            <a href="./mylends">My Lends</a>
            <a href="./myhistory">History</a>
        </nav>
    );
};

/*--Hamburger menu--*/
const nav1 = document.querySelector('.navigation');
nav1.addEventListener('click', ()=>
{nav1.classList.toggle('shown')});

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');})


export default Nav;