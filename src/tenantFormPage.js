import React from "react";
import Tenant from "./components/tenantForm/index";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "./components/Wrapper";

function TenantForm() {
  return (
    <div className="container">
      <div>
        <br />
        <br />
        <Container>
          <Row>
            <Wrapper>
              <Col>
                <Tenant />
              </Col>
            </Wrapper>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TenantForm;
