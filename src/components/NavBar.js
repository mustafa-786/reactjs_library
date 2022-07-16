import React, { useState } from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Button,
  Table,
} from "react-bootstrap";

import {Link} from 'react-router-dom';

const NavBar = () => {
                                   
  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/home'>Library Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
               <Nav.Link as={Link} to='/books'>
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/img/icons8-books-50.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
               Books
              </Nav.Link>

              <Nav.Link as={Link} to='/students'>
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/img/icons8-add-user-male-50.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
              Students
              </Nav.Link>

              <Nav.Link as={Link} to='/issuebook'>
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/img/icons8-book-philosophy-50.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Issue Books
              </Nav.Link>
              <Nav.Link as={Link} to='/returnbook'>
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/img/icons8-return-book-50.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Return Books
              </Nav.Link>
              <Nav.Link as={Link} to='/completebookdetail'>
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/img/icons8-books-50.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Complete Book Detail
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/img/icons8-exit-sign-50.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                Exit
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar