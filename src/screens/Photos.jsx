import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoCard from "../Components/PhotoCard"; // Corrected path
import axios from "axios";
import { BASE_URL, PHOTOS_URL } from "../constants";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${PHOTOS_URL}`)
      .then((response) => {
        setPhotos(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching photos: {error.toString()}</div>;
  }

  return (
    <div>
      <h1>Photos</h1>
      <Container>
        <Row>
          {photos?.map((photo) => (
            <Col key={photo.id} sm={12} md={6} lg={4} xl={3}>
              <PhotoCard photo={photo} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Photos;
