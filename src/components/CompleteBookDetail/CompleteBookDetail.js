import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Button,
  Row,
  Col,
  Table,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { getAllIssueBook, getAllReturnBook } from "../../services/api";
import NavBar from "../NavBar";

const CompleteBookDetail = () => {
  useEffect(() => {
    GetAllIssueBooks();
  }, []);

  useEffect(() => {
    GetAllReturnBooks();
  }, []);
  const [issue_book, getIssueBook] = useState([]);

  const [return_book, getReturnBook] = useState([]);

  const GetAllIssueBooks = async () => {
    try {
      const res = await getAllIssueBook();
      const { data } = res;
      getIssueBook(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const GetAllReturnBooks = async () => {
    try {
      const res = await getAllReturnBook();
      const { data } = res;
      getReturnBook(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NavBar/>
      <Container>
        <Row>
          <Col>
            <h1>Issue Books</h1>
            <Table responsive>
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Student Name</th>
                  <th>Enrollnment Number</th>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Book Name</th>
                  <th>Book Issue Date</th>
                  <th>Book Return Date</th>
                </tr>
              </thead>
              <tbody>
                {issue_book.map((book) => {
                  return (
                    <tr>
                      <td>{book.id}</td>
                      <td>{book.student_name}</td>
                      <td>{book.enrollment_no}</td>
                      <td>{book.department}</td>
                      <td>{book.semester}</td>
                      <td>{book.contact}</td>
                      <td>{book.email}</td>
                      <td>{book.name}</td>
                      <td>{book.issue_date}</td>
                      <td>{book.return_book}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Return Books</h1>
            <Table responsive>
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Student Name</th>
                  <th>Enrollnment Number</th>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Book Name</th>
                  <th>Book Issue Date</th>
                  <th>Book Return Date</th>
                </tr>
              </thead>
              <tbody>
              {return_book.map((book) => {
                  return (
                    <tr>
                      <td>{book.id}</td>
                      <td>{book.student_name}</td>
                      <td>{book.enrollment_no}</td>
                      <td>{book.department}</td>
                      <td>{book.semester}</td>
                      <td>{book.contact}</td>
                      <td>{book.email}</td>
                      <td>{book.name}</td>
                      <td>{book.issue_date}</td>
                      <td>{book.return_book}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
       </Container>

      
    </>
  );
};

export default CompleteBookDetail;
