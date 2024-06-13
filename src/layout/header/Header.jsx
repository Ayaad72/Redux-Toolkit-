import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import { MdOutlineArrowUpward } from "react-icons/md";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <a href="#">home</a>
            <span style={{ marginLeft: "15px" }}>page</span>
          </div>
        </div>
      </section>
      <Navbar
        id="header"
        expand="xl"
        className={`${scrolled ? "scrolled" : ""} ${
          isMenuOpen ? "menu-open" : ""
        }`}
      >
        <Container fluid className="navContainer">
          <div id="logo">
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle className="" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav>
              <LinkContainer to="/users">
                <Nav.Link>Users</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/comments">
                <Nav.Link>Comments</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/albums">
                <Nav.Link>Albums</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/photos">
                <Nav.Link>Photos</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className={`back-to-top ${scrolled ? "active" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <MdOutlineArrowUpward />
      </div>
    </>
  );
};

export default Header;
