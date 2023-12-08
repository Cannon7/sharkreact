import Header from "../components/header.js"
import Footer from "../components/footer.js"
import axios from 'axios';


function NewLend(){
    const lendeeInsert = async (a) => {
        a.preventDefault();
        try {
          await axios.post('http://localhost:8080/api/lendee', {
            lend_name, 
            amount,
            due,
            given,
            phone,
            rating,
            lender
          });
          alert('Data inserted!');
        } catch (err) {
          console.log(err);
        }
      }
    /*
    <form onSubmit={lendeeInsert}>
        <input type="text" name="name" placeholder="Lendee Name" onChange={(a) => setLendee(a.target.value)}/>
        <input type="number" name="amount" placeholder="Amount Lent" onChange={(a) => setAmount(a.target.value)}/>
        <input type="date" name="due" placeholder="Date Lent" onChange={(a) => setGiven(a.target.value)}/>
        <input type="date" name="given" placeholder="Date Due" onChange={(a) => setDue(a.target.value)}/>
        <input type="number" name="phone" placeholder="Lendee Phone" onChange={(a) => setPhone(a.target.value)}/>
        <input type="number" name="rating" placeholder="Lendee Rating" onChange={(a) => setRating(a.target.value)}/>
        <input type="number" name="lender" placeholder="Lender" onChange={(a) => setLender(a.target.value)}/>
        <button type="submit">New Lend</button>
    </form>
    */
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