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
            <main className="body">
                <div className="bodyCard">
                    <section id='sectionProfile'>
                        {/* sectionProfile creates grid for the profile */}
                        {/* leftTopProfile is to set the grid spot*/}
                      <section id='leftTopProfile'>
                        <h2 className='infoBox'>Name </h2>
                        <h2 className='infoBox'>Username</h2>
                        <div id='contactBox' className='infoBox'>
                          <h3>Contact:</h3>
                          <p>111 111-1111</p>
                          <p>exampleEmail@gmail.com</p>
                        </div>
                      </section>
                      {/*rightTopeProfile is to set the grid spot*/}
                      <section id='rightTopProfile'>
                        <img src='https://placehold.co/200x200' alt='profilePicture'></img>
                      </section>
                    </section>
                    <button id="editProfButton">Edit Profile</button>
                </div>
            </main>
            <Footer/>
        </div>
    );

};

export default UserProfile;