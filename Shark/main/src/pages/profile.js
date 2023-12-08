import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from 'axios';

function UserProfile() {
    return(
        <div>
            <Header/>
            <h1>username</h1>
            <p>Loans: </p>
            <p>Items to Loan: </p>
            <p>Current Loans: </p>
            <Footer/>
        </div>
    );
};

export default UserProfile;