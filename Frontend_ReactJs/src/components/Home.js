import React, { useEffect } from "react";
//  import { Jumbotron } from "reactstrap";
//import Jumbotron from 'react-bootstrap/Jumbotron'; 
import { Container } from "react-bootstrap";

 
const Home = () => {
    useEffect(()=>{
        document.title="Home";
},[])
    return (
        <div>
            <Container style={{ color: "whitesmoke", backgroundColor: "goldenrod" }} 
            className="text-center bg-info text-dark ">
                <h1 style={{color:"whitesmoke"}} >Courses Management Portal</h1>
                <p style={{color:"aqua"}}>You can Add Delete Update your courses and manage it easily </p>
            </Container>


        </div>
    )
}
export default Home;