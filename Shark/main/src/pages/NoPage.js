import Header from '../components/header.js'
import axios from 'axios';


function NoPage(){
    return(
        <>
        <Header />
        <h1>404 Error: Page Not Found</h1>
        </>
    )
}

export default NoPage;