import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { editBook, getBookById } from "../../services/api";
import {useParams,useNavigate} from 'react-router-dom';
import NavBar from "../NavBar";

const BookEdit = () => {
 
  const [book, setBook] = useState();
  const bookid =useParams()
   const navigate = useNavigate();

  

  useEffect(()=>{
   GetBookById();
  },[])
  
  const [editbook, setEditBook] = useState();

  const getValue = (e) => {
               try {
               setEditBook({ ...editbook, [e.target.name]: e.target.value });
               } catch (e) {
                 console.log(e);
               }
             };
  const GetBookById =async() => {
           try{
            const res =await getBookById(bookid.id)
            const {data} =res.data
            setEditBook(data)
           // setEditBook(data.data)
           
           }   catch(e){
             console.log(e)  
           } 
  }
  const EditBooks = async () => {
    try {
      await editBook(bookid.id,editbook);
      navigate('../books')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
         <NavBar/>
         <Container fluid>
          <Form className="ml-50">
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="name"
                value={editbook?.name}
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
                value={editbook?.author}
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
                value={editbook?.publication}
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
                value={editbook?.purchase_date}
                placeholder="Enter purchase date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Price</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="price"
                value={editbook?.price}
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
                value={editbook?.quantity}
                onChange={(e) => getValue(e)}
                placeholder="Enter quantity"
              />
            </Form.Group>
          </Form>
          </Container>

          <Button variant="primary" onClick={(e) => EditBooks(e)}>
            Edit
          </Button>
    </>
  );
};

export default BookEdit;
