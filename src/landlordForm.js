import React from "react";
import Landlord from "./components/landlordForm/index";

function LandlordForm() {
  return (
    <div className="container">
      <div>
        <br />
        <br />
        <Container>
          <Row>
            <Wrapper>
              <Col>
                <Landlord />
              </Col>
            </Wrapper>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LandlordForm;
