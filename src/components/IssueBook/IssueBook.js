import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Button,
  Table,
  Row,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { addIssueBook, getAllBook, searchStudent } from "../../services/api";
import NavBar from "../NavBar";

const IssueBook = () => {
  const [books, getBooks] = useState([]);
  const [issue_book, setIssueBook] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    getAllBooks();
  }, []);
  const getAllBooks = async () => {
    try {
      const res = await getAllBook();
      const { data } = res;
      getBooks(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getIssueBookValue = (e) => {
    setIssueBook({ ...issue_book, [e.target.name]: e.target.value });
  };

  const AddIssueBooks = async () => {
    try {
      await addIssueBook(issue_book?.id, issue_book);
    } catch (e) {
      console.log(e);
    }
  };
  const searchStudents = async () => {
    try {
      const res = await searchStudent(issue_book);
      const { data } = res.data;
      setIssueBook(data);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  const SearchGetValue = (e) => {
    setIssueBook({ ...issue_book, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Form className="ml-50">
              <Form.Group className="mb-3">
                <Form.Label>Enter Enrollnment Number</Form.Label>
                <Form.Control
                  name="enrollment_no"
                  onChange={(e) => SearchGetValue(e)}
                  size="sm"
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={() => searchStudents()}>
              Search Student
            </Button>
            {error && (
              <div className="text-danger">Invalid enrollnment number</div>
            )}
          </Col>

          <Col>
            <Form className="ml-50">
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  onChange={(e) => getIssueBookValue(e)}
                  name="name"
                  size="sm"
                  type="text"
                  value={issue_book?.name}
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  onChange={(e) => getIssueBookValue(e)}
                  name="department"
                  size="sm"
                  type="text"
                  value={issue_book?.department}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Student Semester</Form.Label>
                <Form.Control
                  onChange={(e) => getIssueBookValue(e)}
                  name="semester"
                  size="sm"
                  type="text"
                  placeholder=""
                  value={issue_book?.semester}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Student Contact</Form.Label>
                <Form.Control
                  onChange={(e) => getIssueBookValue(e)}
                  name="contact"
                  size="sm"
                  type="text"
                  placeholder=""
                  value={issue_book?.contact}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Student Email</Form.Label>
                <Form.Control
                  onChange={(e) => getIssueBookValue(e)}
                  name="email"
                  size="sm"
                  type="text"
                  placeholder=""
                  value={issue_book?.email}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Books Name</Form.Label>

                <Form.Select
                  name="book_name"
                  onChange={(e) => getIssueBookValue(e)}
                >
                  <option>Select</option>
                  {books.map((book) => {
                    return <option value={book.id}>{book.name}</option>;
                  })}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Book Issue Date</Form.Label>
                <Form.Control
                  onChange={(e) => getIssueBookValue(e)}
                  name="issue_date"
                  size="sm"
                  type="date"
                  placeholder=""
                />
              </Form.Group>
            </Form>
            <Button variant="primary" className="mb-3" onClick={() => AddIssueBooks()}>
              Issue Book
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IssueBook;
