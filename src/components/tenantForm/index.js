import React, { Component } from "react";
import "./style.css";
import { Form, Button, Col } from "react-bootstrap";

class Forms extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <Button variant="info" type="submit" className="changedMin">
          Exit
        </Button>
        <br />
        <br />
        <Form>
          <h2>Set up your account</h2>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First" className="firstName" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last" className="lastName" />
            </Col>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail" className="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridPassword"
              className="password"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="password"
              />
            </Form.Group>
          </Form.Row>
          <br />
          <h3>Occupation</h3>
          <p>We do a general background check for our Employers.</p>
          <Form.Row>
            <Col>
              <Form.Label>Employer</Form.Label>
              <Form.Control placeholder="Business Name" className="employer" />
            </Col>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Phone" className="phoneNum" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Supervisor</Form.Label>
              <Form.Control
                placeholder="Supervisor name"
                className="supervisor"
              />
            </Col>
            <Col>
              <Form.Label> Supervisors's number</Form.Label>
              <Form.Control
                placeholder="Supervisors's number"
                className="supNum"
              />
            </Col>
          </Form.Row>

          <Form.Group controlId="formGridAddress1" className="title">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="title" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2" className="income">
            <Form.Label>Yearly Income</Form.Label>
            <Form.Control placeholder="Yearly Income" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="18 years old and older? Check yes. If no, Do Not Continue! "
            />
          </Form.Group>

          <Button variant="info" type="submit" className="submitLandForm">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Forms;
