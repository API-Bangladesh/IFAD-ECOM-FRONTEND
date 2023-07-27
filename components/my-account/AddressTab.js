import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
// import { Router } from "next/router";
import axios from "axios";
import {token} from "../../utils/auth";
import {showErrorNotification, showSuccessTimerNotification} from "../Modules/helper/notificationHelper";
import {API_BASE_URL} from "../../utils/constants";
import { fetchAddresses, saveAddresses } from "../../services/AddressServices";

const AddressTab = () => {
  const [addresses, setAddresses] = useState([]);

  // fetch
  useEffect(() => {
    fetchAddresses().then((response) => {
      console.log(response)
      if (response?.data) {
        setAddresses(response.data);
      }
    });
  }, []);

  const [myAddress, setMyAddress] = useState({
    title: "",
    name: "",
    address_line_1: "",
    address_line_2: "",
    division_id: "",
    district_id: "",
    upazila_id: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setMyAddress({
      ...myAddress,
      [e.target.name]: e.target.value,
    })
  }

  const createAddress = async(e) => {
    e.preventDefault();
    const data = {
      title: myAddress.title,
      name: myAddress.name,
      address_line_1: myAddress.address_line_1,
      address_line_2: myAddress.address_line_2,
      division_id: myAddress.division_id,
      district_id: myAddress.district_id,
      upazila_id: myAddress.upazila_id,
      postcode: myAddress.postcode,
      phone: myAddress.phone,
      email: myAddress.email,
    };

    const headers = {
      'Authorization': "aAUijZ4qzNjIr3vAhvGw8ccu7xxf0zV040vUALBowDJs3SXrdXKBI3QSyPYe",
      
    };

    // saveAddresses(data).then((response) => {
    //   console.log(response)
    // });

    try{
      // const response = await saveAddresses(data)
      const response = await axios.post(`${API_BASE_URL}/ecom/addresses`, data, { headers });
      console.log(response);
      // showSuccessTimerNotification('', response.data.message);
      // setMyAddress({
      //   title: '',
      //   name: '',
      //   address_line_1: '',
      //   address_line_2: '',
      //   division_id: '',
      //   district_id: '',
      //   upazila_id: '',
      //   postcode: '',
      //   phone: '',
      //   email: '',
      // });
    }
    catch(err){
      console.log(err.message);
      showErrorNotification("Error", err.message);
    }
  }

    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Address</h1>
      <Button onClick={handleShow} variant="primary" className="text-capitalize rounded-0 nav-link active p-2 mt-3">Create Address</Button>
      <Row>
        <Col lg={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Name</th>
                <th>Address Line 1</th>
                <th>Address Line 2</th>
                <th>Division</th>
                <th>District</th>
                <th>Upazilla</th>
                <th>Post Code</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {addresses && addresses.length ? addresses.map((item, index) => 
                <tr key={index}>
                  <th>{item.title}</th>
                  <th>{item.name}</th>
                  <th>{item.address_line_1}</th>
                  <th>{item.address_line_2}</th>
                  <th>{item.division_id}</th>
                  <th>{item.district_id}</th>
                  <th>{item.upazila_id}</th>
                  <th>{item.postcode}</th>
                  <th>{item.phone}</th>
                  <th>{item.email}</th>
                </tr>
                ) : 
                <>
                  No data found
                  <Button onClick={handleShow} variant="primary" className="text-capitalize rounded-0 nav-link active p-2 mt-3">Create Address</Button>
                </>
              }
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
            <Form onSubmit={(e) => createAddress(e)}>
              <Modal.Header closeButton>
                <Modal.Title>Add Address</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address Type</Form.Label>
                  <Form.Select 
                    aria-label="Default select example"
                    name="title"
                    onChange={handleChange}
                    value={myAddress.title}
                  >
                    <option value="0">Select Address Type</option>
                    <option value="1">Home Address</option>
                    <option value="2">Shipping Address</option>
                    <option value="3">Billing Address</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control 
                    name='name'
                    value={myAddress.name}
                    type="text"
                    className="rounded-0 form-deco form-padd"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control 
                    name='address_line_1'
                    value={myAddress.address_line_1}
                    type="text"
                    className="rounded-0 form-deco form-padd"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control 
                    name='address_line_2'
                    value={myAddress.address_line_2}
                    type="text"
                    className="rounded-0 form-deco form-padd"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    name='phone'
                    value={myAddress.phone}
                    type="text"
                    className="rounded-0 form-deco form-padd"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    name='email'
                    value={myAddress.email}
                    type="text"
                    className="rounded-0 form-deco form-padd"
                    onChange={handleChange}
                  />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button 
                variant="secondary" 
                onClick={handleClose}
                className="text-capitalize font-18 px-5 mb-4 user-sub-btn rounded-0 font-jost"
              >
                Close
              </Button>
              <Button 
                  onClick={(e) => createAddress(e)} 
                  type="submit" 
                  variant="primary" 
                  className="text-capitalize font-18 px-5 mb-4 user-sub-btn rounded-0 font-jost"
                >
                  Create
              </Button>
            </Modal.Footer>
            </Form>
          </Modal>
        </Col>
      </Row>
    </>
  )
}

export default AddressTab