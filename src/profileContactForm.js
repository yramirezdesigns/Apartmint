import React from "react";
import { Form, Button, Col } from "react-bootstrap";

// class Forms extends Component {
//   render() {
//     return (

function ContactForm(props) {
  return (
    <div className="container">
      <br />

      {/* <Button variant="info" type="submit" className="changedMin">
        Exit
      </Button>
      <br />
      <br /> */}
      <Form>
        <h2>Contact The Landlord About This Apartment</h2>

        <Form.Row>
          <Col>
            <Form.Label>Apartment of Interest</Form.Label>
            <Form.Control
              placeholder="Selected Apartment"
              className="selectedApa"
            />
          </Col>
        </Form.Row>

        {/* <Form.Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            {props.name}
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

          <Col>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Phone" className="phoneNum" />
          </Col>
        </Form.Row>
        <br />
        <h3>Your Occupation information</h3>
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
        <Form.Row>
          <Col>
            <Form.Group controlId="formGridAddress1" className="title">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="title" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridAddress2" className="income">
              <Form.Label>Yearly Income</Form.Label>
              <Form.Control placeholder="Yearly Income" />
            </Form.Group>
          </Col>
        </Form.Row> */}

        <Form.Group
          controlId="exampleForm.ControlTextarea1"
          className="Message"
        >
          <Form.Label>Enter Message here</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Button variant="info" type="submit" className="submitLandForm">
          Send Message
        </Button>
      </Form>
    </div>
  );
}
export default ContactForm;
