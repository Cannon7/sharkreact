import Header from '../components/header.js'
import Footer from '../components/footer.js'



function NewUser(){
    return(
        <>
        <Header />
        <h1>New user</h1>

        <h3>Name</h3>
        <p>Entry box</p>

        <h3>Username</h3>
        <p>Entry box</p>

        <h3>Password</h3>
        <p>Entry box maybe with conditions?</p>

        <h3>Contact info</h3>
        <p>Drop down box w mode of contact w entry box</p>
        <Footer/>
        </>
    )
}

export default NewUser;