import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Router } from "next/router";
import axios from "axios";
import { token } from "../../../utils/auth";
import { showErrorNotification, showSuccessTimerNotification } from "../helper/notificationHelper";


const ChangePassword = () => {
  const [myPassword, setMyPassword] = useState({
    current_password:"",
    password:"",
    password_confirmation:""
  });

  const handleChange = (e) =>{
    setMyPassword({
      ...myPassword,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e) =>{
    const BASE_URL = "http://192.168.11.93:8000/ecom"
    e.preventDefault();
    const data = {
      current_password: myPassword.current_password,
      password: myPassword.password,
      password_confirmation: myPassword.password_confirmation
    };
    const headers = {
      'Authorization': token(),
      'Content-Type':'application/json',
    };

    try{
      await axios.put(`${BASE_URL}/change-password`,data,{headers})
        .then((res)=>{
          console.log(res.data);
          showSuccessTimerNotification("",res.data.message);
        });
        setMyPassword({
          current_password:"",
          password:"",
          password_confirmation:""
        });
    }catch(err){
      console.log(err.message);
      showErrorNotification("Error", err.message);
    }
  }

  return (
    <>
      <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 "></h1>
      <Row>
        <Col lg={8}>
          <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Old Password</Form.Label>
              <Form.Control 
              name='current_password'
              value={myPassword.current_password}
              type="password"
              className="rounded-0 form-deco form-padd"
              onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>new Password</Form.Label>
              <Form.Control 
              name='password'
              value={myPassword.password}
              type="password" 
              className="rounded-0 form-deco form-padd"
              onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>confirm Password</Form.Label>
              <Form.Control 
              name='password_confirmation'
              value={myPassword.password_confirmation}
              type="password" 
              className="rounded-0 form-deco form-padd"
              onChange={handleChange}/>
            </Form.Group>
            <Button type="submit" variant="primary" className="text-capitalize font-18 px-5 mb-4 user-sub-btn rounded-0 font-jost">save</Button>{" "}
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ChangePassword