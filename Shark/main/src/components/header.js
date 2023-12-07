import React from 'react';
import Nav from './nav.js';
function Header(){
    /*Re-added Nav to header, also added extra 
    div elements to wrap certain objects for 
    easier formatting*/
    return(
        <>
        <header>
            <div className= 'title-box'>
                <h1>Shark</h1>
                <h3>Fun Shark stuff here</h3>
            </div>
            <div className='logo-box'>
            <img src='sharklogo.jpg' alt='shark logo' />
            </div>
            <Nav />
        </header>
            {/* placeholder line thing cuz i need it haha */}
            <hr></hr>
        </div>
        </>
    );
}

export default Header;