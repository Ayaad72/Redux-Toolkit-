import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AlbumCard from "../Components/AlbumCard";
import axios from "axios";
import { BASE_URL, ALBUMS_URL } from "../constants";
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URL}${ALBUMS_URL}`)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        alert("There was an error fetching the albums data!", error);
      });
  }, []);
  return (
    <div>
      <h1>Albums</h1>
      <Container>
        <Row>
          {albums?.map((album) => (
            <Col key={album.id} sm={12} md={6} lg={4} xl={3}>
              <AlbumCard album={album} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Albums;
