import React from "react";
import { Card,CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
const OnDelete=()=>{
    toast.error("Deleted" ,{position:"top-right"});
}
const OnUpdate=()=>{
    toast.success("Updated",{positon:"top-right"});
}
const Course=({course})=>{
    return(
        <div class="col justify-content-center">
        <Row>
        <Col>
        <Card className="text-center" style={{backgroundColor: '#e6ffe6'}} >
            <ToastContainer className="text-center"/>
            
            
            <CardBody>
                <Row>
                <br/>
                <CardSubtitle className="font-weight-bold"> {course.title} </CardSubtitle>
                <CardText> {course.description} </CardText>
                <Container className="text-center">
                    <Button color="danger mr-3" onClick= {OnDelete} >Delete</Button>&nbsp;
                    <Button color="primary ml-3" onClick={OnUpdate}>Enroll now</Button>
                    <br/><br/>
                </Container>
                </Row>
            </CardBody>
        </Card>
        <br/>
        </Col>
        </Row>
        </div>
    );
};

export default Course;