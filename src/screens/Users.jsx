import React, { useEffect, useState } from "react";
import UserCard from "../Components/UserCard";
import { Container, Row, Col } from "react-bootstrap";
import { useGetUsersQuery } from "../slices/userApiSlice";
import axios from "axios";
const Users = () => {
  // const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data));
  // }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("res....", response);
        setUsers(response.data);
      })
      .catch((error) => {
        alert("There was an error fetching the user data!", error);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <Container>
        <Row>
          {users?.map((user) => (
            <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
              <UserCard user={user} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Users;
