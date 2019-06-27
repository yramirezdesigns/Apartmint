import React from "react";
import "./ApartmentCard.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

function ApartmentCard(props) {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <span
          role="img"
          onClick={() => props.removeApartment(props.id)}
          className="remove"
          aria-label="Emojis"
        >
          🚫
        </span>
        <Card.Img
          variant="top"
          className="apartmentImage"
          alt={props.name}
          src={props.image}
        />
        <Card.Body clasName="cardBody">
          <Card.Title>
            <strong>Name:</strong> {props.name}
          </Card.Title>
          <Card.Text>
            <div className="img-container">
              <div className="content">
                <ul>
                  <li>
                    <strong>Room/s:</strong> {props.rooms}
                  </li>
                  <li>
                    <strong>Bath/s:</strong> {props.bath}
                  </li>
                  <li>
                    <strong>Location:</strong> {props.location}
                  </li>
                  <li>
                    <strong>City:</strong> {props.city}
                  </li>
                  <li>
                    <strong>State:</strong> {props.state}
                  </li>
                  <li>
                    <strong>Rent: $</strong>{" "}
                    <span className="rentTotal">{props.rent}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>

          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Button variant="info" className="contactLandlord">
                Contact Landlord{" "}
                <span aria-label="Emojis" role="img">
                  🔑
                </span>
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default ApartmentCard;
