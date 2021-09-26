import React from "react";
import { Card, CardBody, Form, FormGroup, Input, Label,Button,Container, Jumbotron } from "reactstrap";

const AddCourse=()=>{
    return(
        <div>
            <hr/>
            <Card style={{backgroundColor: '#fff0e6'}}>
            <CardBody>
            <h2 className="text-center"> Fill Course details </h2>
            <Form>
                <FormGroup>
                    <Label for="userid">Course ID</Label>
                    <Input type="text" placeholder="Enter Here" name="userid" id="userid"/>
                </FormGroup><br/>
                <FormGroup> 
            
                    <Label for="coursetitle"> Course Title:</Label>
                    <Input type="text" placeholder="Enter title here" name="coursetitle" id="coursetitle"/>
                </FormGroup><br/>
                <FormGroup>
                    <Label for="description">Course Description:</Label>
                    <Input type="textarea" placeholder=" Enter description here" name="description" id="descriptiom"
                    style={{height:100}}/>
                </FormGroup><br/>
                <FormGroup>
                    <Label> Course by:</Label>
                    <Input type="text" name="name" placeholder="Enter your name" id="name"/>
                </FormGroup><br/>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>&nbsp;
                    <Button color="warning"> Clear</Button>
                </Container>
            </Form>
            </CardBody>
            </Card>
            <hr/>
            
        </div>
    );
};

export default AddCourse;