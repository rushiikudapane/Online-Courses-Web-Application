import React from "react";
import { Jumbotron, Card, CardBody, Button, Container } from "reactstrap";

const Home=()=>{
    return(
        <div>
            <Jumbotron fluid className="text-center my-7" style={{backgroundColor: '#ffe0cc'}}>
                
                
                    <br/><br/><h2> Learn How to Code with Rushiraj </h2>
                    <p>Advance way to learn code with ease. Try free courses now</p>
                    <Container fluid className="text-center">
                    <Button outline color="primary" size="sm" style={{float: 'center'}}>Start Learning</Button><br/><br/><br/>
                    </Container>
            </Jumbotron>
        </div>
    );
};

export default Home;