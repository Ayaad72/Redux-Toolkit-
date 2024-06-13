import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./screens/Home";
import Users from "./screens/Users";
import Comments from "./screens/Comments";
import Albums from "./screens/Albums";
import Photos from "./screens/Photos";
import Login from "./Components/Login";
import Posts from "./Components/Posts"; // Import Posts component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/posts" element={<Posts />} /> {/* Add Posts route */}
      <Route path="/comments" element={<Comments />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/photos" element={<Photos />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
