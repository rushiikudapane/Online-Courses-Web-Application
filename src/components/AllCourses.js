import React, {useState} from "react";
import Course from "./Course";
import { Card, CardBody } from "reactstrap";

const AllCourses=()=>{
        const [courses, setCourses]=useState([
            {title:"Java Course", description:"This is complete Java course for beginner"},
            {title:"Django Course", description:"This is complete course on Python Django framework"},
            {title:"ML with Python", description:"Learn ML using Pyhton in just 3 hrs"},
            {title:"Java Course", description:"Learn Java with me for free"},
            {title:"C/C++", description:"Basics to Advance-3 week course"},
            {title:"React.js", description:"Learn Web App Development"}
        ])
    return(
        <div style={{backgroundColor: '#ffffe6'}}>
            
            
            <br/>
            <h1 className="text-center font-weight-bold"  > All Courses</h1>
            <p className="text-center">Courses are mentioned below</p>
            <br/>
            {
                courses.length>0? courses.map((item)=>(
                    <Course course={item}/>
                )) : "No courses"
            }
            <br/>
            
        </div>
    );
};

export default AllCourses;