import React from "react";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";

const Menus=()=>{
    return(
        <div>
            <ListGroup >
                <ListGroupItem color="primary" tag="a" href="/" action>Home</ListGroupItem>
                <ListGroupItem color="primary" tag="a" href="/all-courses" action>View Courses</ListGroupItem>
                <ListGroupItem color="primary" tag="a" href="/add-course" action>Add Courses</ListGroupItem>
                <ListGroupItem color="primary" tag="a" href="/about" action>About</ListGroupItem>
                <ListGroupItem color="primary" tag="a" href="/contact" action>Contact Us</ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default Menus;