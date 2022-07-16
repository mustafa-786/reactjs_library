import React, { useState, useEffect } from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { deleteBook, getAllBook } from "../../services/api";
import NavBar from "../NavBar";
import "./Book.css";
import BookModal from "./Modal/Book-modal";
import { Link } from "react-router-dom"; 
import BookEdit from "./BookEdit";

const Book = () => {
  const [show, setShow] = useState(false);
  const [books, getBooks] = useState([]);

  const handleBookModal = () => {
    setShow(true);
  };
  const handleClose =(e)=> {
   setShow(e);
  }

  const [showedit, setShowEdit] = useState(false);
 
  const handleBookModalEdit = () => {
    setShowEdit(true);
  };
  const handleCloseEdit =(e)=> {
   setShowEdit(e);
  }

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

  const DeleteBook = async (id) => {
    try {
      await deleteBook(id);
      getAllBooks();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            {" "}
            <Button
              className="button"
              onClick={() => handleBookModal()}
              variant="primary"
            >
              Add Book
            </Button>
          </Col>
          {show && <BookModal showModal={show} onCloseModal={(e)=>handleClose(e)} />}
        </Row>
        <Row>
          <Col>
            <Table responsive className="table">
              <thead>
                <tr>
                  <th>Book Id</th>
                  <th>Book Name</th>
                  <th>Book Author</th>
                  <th>Book Publication</th>
                  <th>Book Date</th>
                  <th>Book Price</th>
                  <th>Book Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => {
                  return (
                    <tr>
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.publication}</td>
                      <td>{book.purchase_date}</td>
                      <td>{book.price}</td>
                      <td>{book.quantity}</td>
                      <td>
                        <Button  variant="primary" as={Link} to={`/book/${book.id}/edit`} >Edit</Button>

                        <Button
                          variant="danger"
                          onClick={() => DeleteBook(book.id)}
                        >
                          Delete
                        </Button>
                      </td>
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

export default Book;
