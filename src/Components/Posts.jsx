import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, POST_URL } from "../constants";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${POST_URL}`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleProfileClick = (body) => {
    alert(body);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.body}</p>
              <button
                onClick={() => handleProfileClick(post.body)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Visit Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
