import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function ApartmentCard(props) {
  return (
    <div>
      <Card className="successAlert">
        <Card.Header>You have created your account</Card.Header>
        <Card.Body>
          <Card.Title>Success!!!</Card.Title>

          <Button variant="info">x</Button>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default ApartmentCard;
