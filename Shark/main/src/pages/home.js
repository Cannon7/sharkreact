import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/home.css';
// ella 
function MainPage() {
  return (
    <div>
        <Header></Header>
        {/* The body class should be applied to all mains, will center text */}
        <main className='body profileHome'>
          {/* Ella G. */}
          {/* The div's id is so we can make a custom grid for this specific page */}
          {/* The class is to make the body card-like, it should be applied on every page */}
          <div id='homePageGrid' className='bodyCard'>
            <h1>Welcome Back User!</h1>
            {/* infoBox basically puts a border around whatever the class is defined on*/}
            <section id='alertSection' className='infoBox'>
              <h2 >Alerts</h2>
              <p>Ben's loan is due in 3 days</p>
            </section>
            <img src='https://placehold.co/200x200' alt='profilePicture'></img>
            {/* link to users current lend page. */}
            <h2 className='infoBox'><a href='mylends'>View Current Loans</a></h2>
          </div>
        </main>
        <Footer />
    </div>
  )
};

export default MainPage;