import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../services/api";

const Login = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getValue = (e) => {
    try {
      setUser({ ...user, [e.target.name]: e.target.value });    
} catch (e) {
      console.log(e);
    }
  };

  const Login = async (e) => {
    try {
       e.preventDefault();        
      const res =await adminLogin(user);
      if(res){
               navigate("dashboard");
      } else{
       setError(true)       
      }
     
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Form className="ml-50">
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={(e) => getValue(e)}
            size="sm"
            type="text"
            name='user_name'
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => getValue(e)}
            size="sm"
            type="password"
            name='password'
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={(e) => Login(e)} type="submit">
          Login
        </Button>
      </Form>
     {error && (<div className="text-danger">Invalid Login Credentials</div>)}
      
    </>
  );
};

export default Login;
