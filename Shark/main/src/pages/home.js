import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';

function MainPage() {
  return (
    <div>
        <Header></Header>
        <main>
            <Nav />
            <h2>Welcome back user! </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo nam iusto soluta quo molestiae fugit reiciendis quaerat voluptatem, maxime possimus corporis delectus aperiam vel quibusdam, est, consectetur voluptatibus doloribus minima esse. Animi quis consequuntur maxime similique voluptatibus recusandae!</p>

        </main>
        <Footer></Footer>
    </div>
  )
};

export default MainPage;