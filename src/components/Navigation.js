import React from "react";
import { Button, Jumbotron, Container, Card, CardBody } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

const btnHandle=()=> {
    toast("Proceding please wait",{position:"top-right"});      
  };
function Nav(){
    return(
        <div >
            <hr/>
            <Container className="text-center" >
            <br/>
            <Card style={{backgroundColor: '#e6ffe6'}} >
            <CardBody>
            <Jumbotron className="text-center">
            <ToastContainer/>
            <br/>
            <Button size="sm" color="danger" outline block onClick={btnHandle} style={{float:"left"}}>SignUp</Button>;
            <Button size="sm" color="primary" outline block onClick={btnHandle} style={{float:"right"}}>Contact</Button>
            </Jumbotron>
            </CardBody>
            </Card>
            </Container>

        </div>
    );
};
export default Nav;