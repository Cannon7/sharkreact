import React from "react";
import axios from 'axios';

function MyHistory() {
    var lendlist = LendNode();
    return(
        <div>
            <p>lends will go here :O</p>
            <p id ="lendbox">
                {lendlist.map((lend) => (
                    <div key={lend.idLendeeTable}>
                        <p>Lendee: {lend.Lendee_Name}</p>
                        <p>Amount Borrowed: {lend.Lend_Amount}</p>
                        <p>Start Date: {lend.Lend_Given}</p>
                        <p>Due Date: {lend.Lend_Due}</p>
                        <p>Phone Number: {lend.Lendee_Phone}</p>
                        <p>Rating: {lend.Lendee_Rating}</p>
                    </div>
                ))}
            </p>
        </div>
    );
};
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
function LendNode() {
    var lendee = "Cannon";
    var itemlend = "book1";
    var startdate = "10/17/2023";
    var receivedate = "10/32/2023";
    var id = 1;
    return [{person: lendee, item: itemlend, start: startdate, receive: receivedate, keyid: id}]
}


export default MyHistory;