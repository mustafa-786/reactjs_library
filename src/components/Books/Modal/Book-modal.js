import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addBook } from "../../../services/api";

const BookModal = ({ showModal, onCloseModal }) => {
  const [show, setShow] = useState(showModal);
  const [book, setBook] = useState();

  const handleClose = () => {
    onCloseModal(false);
  };

  const getValue = (e) => {
    try {
      setBook({ ...book, [e.target.name]: e.target.value });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => setShow(showModal), [showModal]);

  const AddBooks = async () => {
    try {
      await addBook(book);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="ml-50">
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="name"
                onChange={(e) => getValue(e)}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Author Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="author"
                onChange={(e) => getValue(e)}
                placeholder="Enter author name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Publication</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="publication"
                onChange={(e) => getValue(e)}
                placeholder="Enter publication"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Purchase Name</Form.Label>
              <Form.Control
                size="sm"
                type="date"
                name="purchase_date"
                onChange={(e) => getValue(e)}
                placeholder="Enter purchase date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Price</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="price"
                onChange={(e) => getValue(e)}
                placeholder="Enter price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Quantity</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="quantity"
                onChange={(e) => getValue(e)}
                placeholder="Enter quantity"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => AddBooks(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookModal;
