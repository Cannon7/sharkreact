import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Nav from '../components/nav.js';
import axios from 'axios';


function NewUser(){
    const handleInsert = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8080/api/data', {
            name,
            email,
            password
          });
          
          alert('Data inserted!'); 
        } catch (err) {
          console.log(err);
        }
      }
/*
    <form onSubmit={handleInsert}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Insert Data</button>
      </form>
*/
    return(
        <>
        <Header />
        <Nav/>
        <h1>New user</h1>

        <form>
            <label>Name:</label>
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