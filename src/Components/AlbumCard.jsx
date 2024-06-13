import React from "react";
import { Card } from "react-bootstrap";

const AlbumCard = ({ album }) => {
  return (
    <Card style={{ width: "17rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        <Card.Text>Album ID: {album.id}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
