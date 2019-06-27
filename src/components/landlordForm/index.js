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
              <Form.Label>Business Name</Form.Label>
              <Form.Control placeholder="Business Name" className="busName" />
            </Col>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control placeholder="Phone" className="phoneNum" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Label>Contact Person</Form.Label>
              <Form.Control
                placeholder="contact Person"
                className="contactPer"
              />
            </Col>
            <Col>
              <Form.Label>Alt number</Form.Label>
              <Form.Control placeholder="Alt Number" className="altNum" />
            </Col>
          </Form.Row>

          <Form.Group controlId="formGridAddress1" className="address1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2" className="address2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity" className="city">
              <Form.Label>City</Form.Label>
              <Form.Control as="select">
                <option>Bronx</option>
                <option>Brooklyn</option>
                <option>Manhattan</option>
                <option>Queens</option>
                <option>Staten Island</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" className="state">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>New York</option>
                <option>New Jersey</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip" className="zipCode">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

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
