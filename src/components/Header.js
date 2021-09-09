import React from "react";
import { Jumbotron, Button, Container, Card, CardBody } from "reactstrap";
import {ToastContainer, toast} from "react-toastify";

const OnButton = ()=>{
    toast("The App not build yet, Sorry for inconvenience", {position : "top-right"});
}
function Header(){
    return(
        <div>
            <ToastContainer/>
            
            <Container>
                <Card className="text-center my-2" style={{backgroundColor: '#ccebff'}}>
                <CardBody>
                <h1 className="display-3" >Online Courses Application</h1>
                <p className="display-9 my-1">A practice project made by Rushiraj Kudapane</p>
                </CardBody>
                <Button color="primary" onClick={OnButton} size="sm" style={{float: 'right'}}> Info</Button><p></p>
                
                </Card>
            </Container>
            <br/>
            
            
        </div>
    );
};

export default Header;
