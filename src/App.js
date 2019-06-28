import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/index";
import Browse from "./ApartmentPage";
import Tenant from "./tenantFormPage";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import Main from "./components/Main/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="">Apartmint</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              {/* Trying to link here -------------------------------------------------*/}
              <span>Browse</span>
              <Route exact={true} path="/browse" component={Browse} />
            </Nav.Link>
            <Nav.Link src={<Tenant />}>Tenant</Nav.Link>
            {/* <Nav.Link href="#pricing">Register</Nav.Link> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
        <div>
          <Main />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
