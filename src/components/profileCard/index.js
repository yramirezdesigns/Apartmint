import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

function ProfileCard(props) {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Body clasName="cardBody">
          <Card.Title>
            <strong>Applicant:</strong>{" "}
            <span className="fullName">
              {props.fName} {props.lName}
            </span>
          </Card.Title>
          <Card.Text>
            <div className="img-container">
              <div className="content">
                <ul>
                  <li>
                    <strong>Email:</strong> {props.email}
                  </li>
                  <li>
                    <strong>Phone Number:</strong> {props.Num}
                  </li>
                  <li>
                    <strong>Employer:</strong> {props.employer}
                  </li>
                  <li>
                    <strong>Job Number:</strong> {props.jobNum}
                  </li>
                  <li>
                    <strong>Contact person:</strong> {props.contact}
                  </li>
                  <li>
                    <strong>title:</strong> {props.title}
                  </li>
                  <li>
                    <strong>Yearly Income:</strong> ${props.income}
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default ProfileCard;
