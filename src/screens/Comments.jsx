import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentCard from "../Components/CommentCard";
import { useGetCommentsQuery } from "../slices/apiSlice";
const Comments = () => {
  const { data: comments, error, isLoading } = useGetCommentsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching comments: {error.toString()}</div>;
  }
  return (
    <div>
      <h1>Comments</h1>
      <Container>
        <Row>
          {comments?.map((comment) => (
            <Col key={comment.id} sm={12} md={6} lg={4} xl={3}>
              <CommentCard comment={comment} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
