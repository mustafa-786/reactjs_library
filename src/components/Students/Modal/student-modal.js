import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addStudent } from "../../../services/api";
const StudentModal = ({ showModal, onCloseModal }) => {
  const [show, setShow] = useState(showModal);
  const [student, addStudents] = useState();

  const handleClose = () => {
    onCloseModal(false);
  };

  const getStudentValue = (e) => {
    addStudents({ ...student, [e.target.name]: e.target.value });
  };

  const AddStudent = async (e) => {
    try {
      await addStudent(student);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="ml-50">
            <Form.Group className="mb-3">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="name"
                onChange={(e) => getStudentValue(e)}
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Enrollnment Number</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="enrollment_no"
                onChange={(e) => getStudentValue(e)}
                placeholder="Enter number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="department"
                onChange={(e) => getStudentValue(e)}
                placeholder="Enter department"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Student Semester</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="semester"
                onChange={(e) => getStudentValue(e)}
                placeholder="Enter semester"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Student Contact</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="contact"
                onChange={(e) => getStudentValue(e)}
                placeholder="Enter contact"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Student Email</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="email"
                onChange={(e) => getStudentValue(e)}
                placeholder="Enter Email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e) => AddStudent(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentModal;
