import React from "react";
import { Button, Row, Col, Container } from "reactstrap";
import { ToastContainer, toast} from "react-toastify";
import Header from "./components/Header";
import Nav from "./components/Navigation";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";
import Home from "./components/Home";
import{BrowserRouter as Router, Route} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  

  return (
    <div style={{backgroundColor: '#ffffe6'}}>
    <Router>
    <ToastContainer/>
    <Container>
      
      <Header/><br/>
      <Button color="success" size="sm" style={{float:"left"}} outline>Login</Button>&nbsp;<Button color="danger" className="ml-3" size="sm" style={{float:"left"}} outline>SignUp</Button><br/><hr/>
      <br/>
      <Row>
        <Col md={4}>
          <Menus/>
        </Col>
        <Col md={8}>
        <Route path="/" component={Home} exact/>
        <Route path="/add-course" component={AddCourse} exact/>
        <Route path="/all-courses" component={AllCourses} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        
        



         
        </Col>

      </Row>
    </Container>
    </Router>
    </div>
  );
};

export default App;
