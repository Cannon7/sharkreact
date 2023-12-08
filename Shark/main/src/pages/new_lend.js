import Header from "../components/header.js"
import Footer from "../components/footer.js"
import axios from 'axios';


function NewLend(){
    return(
        <>
        <Header />
        <h1>New Lend Creation</h1>

        <form>
            <label>Name of Lendee:</label>
            <input type = "text" required/>
        </form>

        <form>
            <label>Object being Lent:</label>
            <input type = "text" required/>
        </form>

        <form>
            <label>Duration of Lend:</label>
            <input type = "text" required/>
            <select>
                <option value="day">Days</option>
                <option value="week">Weeks</option>
                <option value="month">Months</option>
                <option value="custom">Custom</option>
            </select>
        </form>

        <form>
            <label>Lendee Contact:</label>
            
            <select>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="Miguel">Miguel</option>
            </select>
            <input type = "text" required/>
        </form>
        <Footer />
        </>
    )
}

export default NewLend;