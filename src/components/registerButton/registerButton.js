import React from "react";
// import Modal from "../registerModal/registerModal";
import {
  // Form,
  // Button,
  // ButtonToolbar,
  // ButtonGroup,
  // Col,
  Dropdown
  // Modal
} from "react-bootstrap";
import "./registerButton.css";

class Register extends React.Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="info"
            id="dropdown-basic"
            className="registerButton"
          >
            Register
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="tenantButton">
              Tenant
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="landLordButton">
              Landlord
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Register;
