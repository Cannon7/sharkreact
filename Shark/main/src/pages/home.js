import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';
import '../styles/home.css';

function MainPage() {
  return (
    <div>
        <Header></Header>
        <Nav />
        <main className='body profileHome'>
          <div id='bodyCard'>
            <section id='topSectionHome'>
              <section id='leftTopHome'>
                <h2 className='infoBox'>Name </h2>
                <h2 className='infoBox'>Username</h2>
                <div id='contactBox' className='infoBox'>
                  <h3>Contact:</h3>
                  <p>111 111-1111</p>
                  <p>exampleEmail@gmail.com</p>
                </div>
              </section>
              <section id='rightTopHome'>
                <img src='https://placehold.co/200x200' alt='profilePicture'></img>
              <p>★★★★☆</p>
              </section>
            </section>
            <section id='bottomSectionHome'>
              <h1>Lendee Ratings & Reviews</h1>
              <section id='lendeeRatings'>
                <section id='exampleLendeeGrid'>
                  <div id='exampleLendeeReviewCard'>
                    <h3 className='underLined'>Lendee name:</h3>
                    <p>Spilled water on my book :(</p>
                  </div>
                  <div >
                    <p>★★☆☆☆</p>
                  </div>
                </section>
              </section>
            </section>
          </div>
        </main>
        <Footer></Footer>
    </div>
  )
};

export default MainPage;