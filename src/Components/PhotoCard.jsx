import React from "react";
import { Card } from "react-bootstrap";

const PhotoCard = ({ photo }) => {
  return (
    <Card style={{ width: "17rem", margin: "1rem" }}>
      <Card.Img variant="top" src={photo.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
        <Card.Text>Album ID: {photo.albumId}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PhotoCard;
