import React from "react";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Book from "./components/Books/Book";
import Student from "./components/Students/Student";
import IssueBook from "./components/IssueBook/IssueBook";
import ReturnBook from "./components/ReturnBook/ReturnBook";
import CompleteBookDetail from "./components/CompleteBookDetail/CompleteBookDetail";
import Home from "./components/Home";
import BookEdit from "./components/Books/BookEdit";
import StudentEdit from "./components/Students/StudentEdit";

const Routers = () => {
  const routeMapping = [
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/books", element: <Book /> },
    { path: "/students", element: <Student /> },
    { path: "/issuebook", element: <IssueBook /> },
    { path: "/returnbook", element: <ReturnBook/> },
    { path: "/book/:id/edit", element: <BookEdit/> },
    { path: "/student/:id/edit", element: <StudentEdit/> },
    { path: "/completebookdetail", element: <CompleteBookDetail /> },
  ];
  return (
    <>
      <Container fluid>
        <Routes>
          {routeMapping.map((route) => {
            return <Route path={route.path} element={route.element}></Route>;
          })}
        </Routes>
      </Container>
    </>
  );
};

export default Routers;
