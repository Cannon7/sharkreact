import React from "react";
import axios from 'axios';

function MyHistory() {
    var lendlist = LendNode();
    return(
        <div>
            <p>lends will go here :O</p>
            <p id ="lendbox">
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