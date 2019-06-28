import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/index";
import MainPage from "./Mainindex";

function App() {
  return (
    <div className="container">
      <div>
        <Container>
          <Row>
            <Wrapper>
              <Col>
                <MainPage />
              </Col>
            </Wrapper>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
