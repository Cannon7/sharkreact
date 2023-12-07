import React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Nav from '../components/nav';
import "../styles/myhistory.css";
function MyHistory() {
    var lendlist = LendNode();
    return(
        <div>
            <Header className='top'/>
            <Nav />
            <div class='mainbody'>
            <h2 class="box">Lend History</h2>
                <p class="box">
                    {lendlist.map((lend) => (
                        <div key={lend.keyid}>
                            <p>Lendee: {lend.person}</p>
                            <p>Item: {lend.item}</p>
                            <p>Start Date: {lend.start}</p>
                            <p>Date Returned: {lend.receive}</p>
                        </div>
                    ))}
                </p>
            </div>
            <Footer />
        </div>
    );
};
function LendNode() {
    var lendee = "Cannon";
    var itemlend = "book1";
    var startdate = "10/17/2023";
    var receivedate = "10/32/2023";
    var id = 1;
    return [{person: lendee, item: itemlend, start: startdate, receive: receivedate, keyid: id}]
}


export default MyHistory;