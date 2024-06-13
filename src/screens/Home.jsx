// import React, { useEffect, useState } from "react";
// import { Container, Row, Button, Card, Col } from "react-bootstrap";
// import UserCard from "../Components/UserCard";
// import axios from "axios";
// import { useGetUsersQuery } from "../slices/userApiSlice";
// const Home = () => {
//   // const [users, setUsers] = useState([]);
//   const { data: users, refetch, isLoading, error } = useGetUsersQuery();

//   console.log("error...", error);
//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/users')
//   //     .then(response => response.json())
//   //     .then(data => setUsers(data));
//   // }, []);

//   // useEffect(() => {
//   //   axios.get('https://jsonplaceholder.typicode.com/users')
//   //     .then(response => {
//   //       setUsers(response.data);

//   //     })
//   //     .catch(error => {
//   //       alert("There was an error fetching the user data!", error);
//   //     });
//   // }, []);

//   return (
//     <div>
//       {/* <h1>home page</h1>
//       <div className="bg-danger" style={{ height: "600px" }}>
//         <h1>Hero section</h1>
//       </div>
//       <div className="bg-primary" style={{ height: "600px" }}>
//         <h1>Gallery setion</h1>
//       </div>
//       <div className="bg-success" style={{ height: "600px" }}>
//         <h1>About Us section</h1>
//       </div>
//       {error?.status === 404 && <h1>Not found 404</h1>}
//       {isLoading ? (
//         <h1>loading....</h1>
//       ) : (
//         <div className="" style={{ height: "600px" }}>
//           <h1>team section</h1>
//           <Container>
//             <Row>
//               {users?.map((user) => (
//                 <Col key={user.id} sm={12} md={6} lg={4} xl={3}>
//                   <UserCard user={user} />
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postsSlice";
import axios from "axios";
import { BASE_URL, USERS_URL } from "../constants";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts); // Ensure state.posts exists
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleProfileClick = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}${USERS_URL}/${userId}`);
      const user = response.data;
      alert(JSON.stringify(user, null, 2));
    } catch (error) {
      console.error("There was an error fetching the user profile!", error);
    }
  };

  return (
    <div>
      <h1>Welcome, {userInfo.name}</h1>
      <h2>Posts</h2>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "succeeded" ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                margin: "10px",
                borderRadius: "5px",
                width: "300px",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleProfileClick(post.userId)}>
                Visit Profile
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Failed to load posts.</p>
      )}
    </div>
  );
};

export default Home;
