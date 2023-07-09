import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const ChangePassword = () => {
  return (
    <>
      <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Change password</h1>
      <Row>
        <Col lg={8}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Old Password</Form.Label>
              <Form.Control type="password" className="rounded-0 form-deco form-padd"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>new Password</Form.Label>
              <Form.Control type="password" className="rounded-0 form-deco form-padd"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>confirm Password</Form.Label>
              <Form.Control type="password" className="rounded-0 form-deco form-padd"/>
            </Form.Group>
            <Button variant="primary" className="text-capitalize font-18 px-5 mb-4 user-sub-btn rounded-0 font-jost">save</Button>{" "}

          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ChangePassword