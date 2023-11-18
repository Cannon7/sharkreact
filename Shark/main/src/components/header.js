import React from 'react';
import Nav from './nav.js';

function Header(){
{/*Added Nav to header, also added extra 
div elements to wrap certain objects for 
easier formatting*/}
    return(
        <>
        <header>
            <div class= 'title-box'>
                <h1>Shark</h1>
                <h3>Fun Shark stuff here</h3>
            </div>
            <div class='logo-box'>
                <img src='https://placehold.co/100x100' alt='shark logo'></img>
            </div>
            <Nav />
        </header>
            {/* placeholder line thing cuz i need it haha */}
            <hr></hr>
        </>
    );
}

export default Header;