import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { editStudent, getStudentById } from "../../services/api";
import NavBar from "../NavBar";
import { useParams, useNavigate } from "react-router-dom";

const StudentEdit = () => {
  const [student, addStudents] = useState();
  const studentid = useParams();
  const navigate = useNavigate();
  const getStudentValue = (e) => {
    addStudents({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    GetStudentById();
  }, []);

  const GetStudentById = async () => {
    try {
      const res = await getStudentById(studentid.id);
      const { data } = res.data;
      addStudents(data);
      // setEditBook(data.data)
    } catch (e) {
      console.log(e);
    }
  };
  const EditStudents = async (e) => {
    try {
      await editStudent(studentid.id, student);
      navigate('../students');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <NavBar />
      <Container fluid>
        <Form className="ml-50">
          <Form.Group className="mb-3">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="name"
              value={student?.name}
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
              value={student?.enrollment_no}
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
              value={student?.department}
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
              value={student?.semester}
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
              value={student?.contact}
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
              value={student?.email}
              onChange={(e) => getStudentValue(e)}
              placeholder="Enter Email"
            />
          </Form.Group>
        </Form>
      </Container>

      <Button variant="primary" onClick={(e) => EditStudents(e)}>
        Edit
      </Button>
    </>
  );
};

export default StudentEdit;
