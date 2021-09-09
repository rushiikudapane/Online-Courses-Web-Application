import React from "react";
import { Card, CardBody } from "reactstrap";


const About=()=>{
    return(
        <div className="text-center">
            <Card style={{backgroundColor: '#fff0e6'}}>
                <CardBody>
                <hr/>
            <h2>About Us</h2>
            <p>
            Planning to be a virtual professional coach for students? Then it 
            is the prime time to do whatever
             it takes to discriminate yourself as one of
              the finest. Training, certifications and evidence-based
              coaching skills are some areas you can look upon.
               Try to get at least one post-graduation degree
               or professional qualification.
                You should constantly upgrade your knowledge and traits all the way 
               through your career.
                It will assist you to stay up-to-date on important tendencies, earn a higher income, 
               and it will support you stay in business. Students can look for the presence of dynamic skills in coaches
                and must resort to such professionals to reap the rewards considerably.
            </p>
            <hr/>
            </CardBody>
        </Card>
        </div>
    );
};

export default About;