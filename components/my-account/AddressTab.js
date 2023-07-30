import React, {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { MdEdit } from 'react-icons/md';
import { MdDeleteOutline } from 'react-icons/md';
import {toast} from "react-toastify";
import {tostify} from "../../utils/helpers";
import {showErrorNotification} from "../Modules/helper/notificationHelper";
import {fetchAddresses, saveAddress, editAddress, deleteAddress} from "../../services/AddressServices";
import AddressModal from './AddressModal'

const AddressTab = () => {
  const [addresses, setAddresses] = useState([]);

  // fetch
  useEffect(() => {
    fetchAddresses().then((response) => {
      if (response?.data) {
        setAddresses(response.data);
      }
    });
  }, []);

  const defaultAddress = {
    id: null,
    title: "",
    name: "",
    address_line_1: "",
    address_line_2: "",
    division_id: "6",
    district_id: "6",
    upazila_id: "6",
    postcode: "1202",
    phone: "",
    email: "",
  }

  const [myAddress, setMyAddress] = useState(defaultAddress);

  const handleChange = (e) => {
    setMyAddress({
      ...myAddress,
      [e.target.name]: e.target.value,
    })
  }

  const createAddress = async(e) => {
    e.preventDefault();
    handleClose();

    const data = {
      id: myAddress.id,
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

    if (isEditing) {
      // console.log(data.id)
      // return;
      try {
        editAddress(data).then((response) => {
          console.log(response)
          const updatedArray = addresses.map((item) => (item.id === data.id ? data : item));
          setAddresses(updatedArray)
          setMyAddress(defaultAddress)
        });
      }
      catch(err){
        showErrorNotification("Error", err.message);
      }
    } else {
      try {
        saveAddress(data).then((response) => {
          fetchAddresses().then((response) => {
            if (response?.data) {
              setAddresses(response.data);
            }
          });
          setMyAddress(defaultAddress)
        });
      }
      catch(err){
        showErrorNotification("Error", err.message);
      }
    }
  }

  const handleDelete = (event, id) => {
		event.preventDefault();

		if(confirm("Are you sure?")){
			deleteAddress(id).then((response) => {
				if (response?.data?.message) {
					tostify(toast, 'success', response);
					const updatedArray = addresses.filter((item) => item.id !== id);
          setAddresses(updatedArray)
				}
			});
		}
	}

  // modal
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Col lg={6}>
          <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4">Address</h1>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-end">
            <Button 
              onClick={() => {
                setIsEditing(false);
                handleShow()
                setMyAddress(defaultAddress)
              }} 
              variant="primary"
              className="text-capitalize rounded-0 nav-link active mb-4 p-2"
            >
              Add new address
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        {addresses && addresses.length ? addresses.map((item, index) => 
          <Col md={6} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <span className="bg-success text-white p-2 mb-2">{item.title}</span>
                  <div className="d-flex">
                 {   console.log(item)}
                    <MdEdit 
                      onClick={() => {
                        setIsEditing(true);
                        handleShow()
                        setMyAddress(item)
                      }}
                    />
                    <MdDeleteOutline onClick={(event) => handleDelete(event, item?.id)}/>
                  </div>
                </div>
                <Card.Text>
                  <p>Name: {item.name}</p>
                  <p>Address Line 1: {item.address_line_1}</p>
                  <p>Address Line 2: {item.address_line_2}</p>
                  <p>Phone: {item.phone}</p>
                  <p>Email: {item.email}</p>
                </Card.Text>
                <div className="d-flex justify-content-start">
                  <Button onClick={handleShow} variant="primary" className="text-capitalize rounded-0 nav-link active mt-2 mr-2 p-2">Make default billing</Button>
                  <Button onClick={handleShow} variant="primary" className="text-capitalize rounded-0 nav-link active mt-2 p-2">Make default shipping</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          ) : 
          <>No data found</>
        }

        <AddressModal 
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          myAddress={myAddress}
          handleChange={handleChange}
          createAddress={createAddress}
          isEditing={isEditing}
        />
      </Row>
    </>
  )
}

export default AddressTab