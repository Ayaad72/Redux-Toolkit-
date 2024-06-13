import React from "react";
import { Card, Button } from "react-bootstrap";
const UserCard = ({ user }) => {
  return (
    <Card style={{ width: "17rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {user.username}
        </Card.Subtitle>
        <Card.Text>
          <strong>Email:</strong> {user.email} <br />
          <strong>Phone:</strong> {user.phone} <br />
          <strong>Website:</strong> {user.website} <br />
          <strong>Address:</strong> {user.address.suite}, {user.address.street},{" "}
          {user.address.city}, {user.address.zipcode} <br />
          <strong>Company:</strong> {user.company.name} <br />
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}
        </Card.Text>
        <Button
          variant="primary"
          href={`http://${user.website}`}
          target="_blank"
        >
          Visit Here
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
