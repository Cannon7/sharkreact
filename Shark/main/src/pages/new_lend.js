import Header from "../components/header.js"
import Footer from "../components/footer.js"



function NewLend(){
    return(
        <>
        <Header />
        <h1>New Lend Creation</h1>

        <h3>Name of Lendee</h3>
        <p>Entry box</p>

        <h3>Object Being Lent</h3>
        <p>Entry box</p>

        <h3>Length of Loan</h3>
        <p>Drop down box w time lengths w custom option</p>

        <h3>Lendee Contact Prefrence</h3>
        <p>Drop down list w contact options w entry box</p>
        <Footer />
        </>
    )
}

export default NewLend;