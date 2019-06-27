import React from "react";
import Logo from "../../ApartmintLogoSmall.png";
import "./topNavBar.css";
import { Nav } from "react-bootstrap";
import Login from "../login/login";
import Register from "../registerButton/registerButton";

function topNavBar() {
  return (
    <div className="navBar">
      <span className="navContent">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item className="navLogo">
            <Logo />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home" className="browseLink">
              Browse
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="loginLink">
              <Login />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="registerLink">
              <Register />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </span>
    </div>
  );
}

export default topNavBar;
