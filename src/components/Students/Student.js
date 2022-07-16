import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { deleteStudent, getAllStudent } from "../../services/api";
import NavBar from "../NavBar";
import StudentModal from "./Modal/student-modal";
import {Link} from 'react-router-dom';

const Student = () => {
  const [students, getstudents] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    setShow(e);
  };
  const handleBookModal = () => {
    setShow(true);
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  const getAllStudents = async () => {
    try {
      const res = await getAllStudent();
      const { data } = res;
      getstudents(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const DeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      getAllStudents();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <NavBar />
      <Container fluid>
        <Button variant="primary" onClick={() => handleBookModal()}>
          Add Student
        </Button>
        {show && (
          <StudentModal showModal={show} onCloseModal={(e) => handleClose(e)} />
        )}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const {
                id,
                name,
                enrollnment_no,
                department,
                semester,
                contact,
                email,
              } = student;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{enrollnment_no}</td>
                  <td>{department}</td>
                  <td>{semester}</td>
                  <td>{contact}</td>
                  <td>{email}</td>
                  <td>
                    <Button variant="primary" as={Link} to={`/student/${id}/edit`}>Edit</Button>
                    <Button variant="danger" onClick={() => DeleteStudent(id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Student;
