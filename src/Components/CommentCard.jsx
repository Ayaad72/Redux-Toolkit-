import React from "react";
import { Card } from "react-bootstrap";

const CommentCard = ({ comment }) => {
  return (
    <Card style={{ width: "17rem", margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {comment.email}
        </Card.Subtitle>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommentCard;
