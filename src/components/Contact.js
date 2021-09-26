import React from "react";
import { Card, CardBody } from "reactstrap";


const Contact=()=>{
    return(
        <div className="text-center">
        <Card style={{backgroundColor: '#fff0e6'}}>
            <hr/>
         <CardBody>   
            <h2>Contact Us</h2>
            <p>
            Mobile no.: 7744850616<br/>
            Admin.: 7040663309<br/>
            Mail Id: kudapanerushi13@gmail.com<br/>
            Office Address: Plot no.123, Pune-21.<br/>
            </p>
            <hr/>
            </CardBody>
            </Card>
        </div>
    );
};

export default Contact;