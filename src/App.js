import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!userInfo && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <main className="pb-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
