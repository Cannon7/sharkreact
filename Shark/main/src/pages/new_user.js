import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Nav from '../components/nav.js';



function NewUser(){
    return(
        <>
        <Header />
        <Nav/>
        <h1>New user</h1>

        <form>
            <label>Name:</label>
            {/*Text input*/}
            <input type = "text" required/>
        </form>

        <form>
            <label>Username:</label>
            <input type = "text" required/>
        </form>

        <form>
            <label>Password:</label>
            <input type = "text" required/>
        </form>

        <form>
            <label>Contact type:</label>
            <select>
                {/*Drop down menu input*/}
                <option value="email">Email</option>
                <option value="text">Text</option>
                <option value="carrierpigeon">Our Carrier Pigeon Miguel</option>
            </select>
        </form>
        <form>
            <label>Contact Info:</label>
            <input type = "text" required/>
        </form>
        
        <Footer/>
        </>
    )
}

export default NewUser;