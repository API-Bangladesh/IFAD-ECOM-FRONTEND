import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { Router } from "next/router";
import axios from "axios";
// import { showErrorNotification, showSuccessTimerNotification } from "../helper/notificationHelper";


const ChangePassword = () => {
  const [myPassword, setMyPassword] = useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:""
  });

  const handleChange = (e) =>{
    setMyPassword({
      ...myPassword,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e) =>{
    const BASE_URL= 'http://192.168.68.149:4444/ecom';
    e.preventDefault();
    const data = {
      oldPassword: myPassword.oldPassword,
      newPassword: myPassword.newPassword,
      confirmPassword: myPassword.confirmPassword
    };
    const headers = {
      'Authorization': {ACCESS_TOKEN},
      'Content-Type':'application/json',
    };

    try{
      const response = await axios.put(`${BASE_URL}/change-password`,data,{headers})
        .then((res)=>{
          console.log(res);
        });
        setMyPassword({
          oldPassword:"",
          newPassword:"",
          confirmPassword:""
        });
    }catch(err){
      console.log(err.message);
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
              name='oldPassword'
              type="password"
              className="rounded-0 form-deco form-padd"
              onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>new Password</Form.Label>
              <Form.Control 
              name='newPassword' 
              type="password" 
              className="rounded-0 form-deco form-padd"
              onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>confirm Password</Form.Label>
              <Form.Control 
              name='confirmPassword' 
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