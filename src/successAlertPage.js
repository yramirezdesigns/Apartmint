import React from "react";
import AlertSuccess from "./components/Alert/index";
import "./index.css";
import Wrapper from "./components/Wrapper/index";
import { Button, Container, Row, Col } from "react-bootstrap";

function SuccessPage() {
  return (
    <div className="container">
      <div>
        <br />
        <br />
        <Container>
          <Row>
            <Wrapper>
              <Col>
                <AlertSuccess />
              </Col>
              <Col>
                <Button variant="info" type="submit" className="changedMin">
                  Exit
                </Button>
              </Col>
            </Wrapper>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SuccessPage;
