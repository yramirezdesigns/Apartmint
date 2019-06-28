import React from "react";
import ProfileCard from "./profileCardApp";
import ProfileForm from "./profileContactForm";
import "./index.css";
import Wrapper from "./components/Wrapper/index";
import { Button, Container, Row, Col } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="container">
      <div>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <Button variant="info" type="submit" className="changedMin">
                Exit
              </Button>
            </Col>
          </Row>
          <Row>
            <Wrapper>
              <Col>
                <ProfileCard />
              </Col>
              <Col>
                <ProfileForm />
              </Col>
            </Wrapper>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContactPage;
