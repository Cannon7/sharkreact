import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from 'axios';

function UserProfile() {
    //This is probably the right one
    useEffect(() => {
        async function fetchData() {
          try {
            const lendeeresponse = await axios.get('http://localhost:8080/api/lendee');
            setLendeeClass(lendeeresponse.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
    
      }, []);
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