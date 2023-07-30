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
import {fetchAddresses, saveAddress, editAddress, deleteAddress, updateDefaultBillingAddress, updateDefaultShippingAddress} from "../../services/AddressServices";
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
    postcode: "",
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

    if (
      data.title === "" ||
      data.name === "" ||
      data.address_line_1 === "" ||
      data.address_line_2 === "" ||
      data.division_id === "" ||
      data.district_id === "" ||
      data.upazila_id === "" ||
      data.postcode === "" ||
      data.phone === "" ||
      data.email === ""
    ) {
      tostify(toast, 'error', {data: {message: 'Field must not be empty!'}});
      return;
    }

    if (isEditing) {
      try {
        editAddress(data).then((response) => {
          const updatedAddress = addresses.map((item) => (item.id === data.id ? data : item));
          setAddresses(updatedAddress);
          setMyAddress(defaultAddress);
        });
      }
      catch(err){
        showErrorNotification("Error", err.message);
      }
    } else {
      try {
        saveAddress(data).then((res) => {
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
					const updatedAddress = addresses.filter((item) => item.id !== id);
          setAddresses(updatedAddress)
				}
			});
		}
	}

  // modal
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDefaultBilling = (id) => {
    updateDefaultBillingAddress(id);
    const updatedAddress = addresses.map((item) => (item.id === id ? {...item, is_default_billing: 1} : {...item, is_default_billing: null}));
    setAddresses(updatedAddress);
  }

  const handleDefaultShipping = (id) => {
    updateDefaultShippingAddress(id);
    const updatedAddress = addresses.map((item) => (item.id === id ? {...item, is_default_shipping: 1} : {...item, is_default_shipping: null}));
    setAddresses(updatedAddress);
  }

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
          <Col md={6} className="mb-4" key={index}>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <span className="c-tag text-white">{item.title}</span>
                  <div className="d-flex">
                    <MdEdit 
                      onClick={() => {
                        setIsEditing(true);
                        handleShow()
                        setMyAddress(item)
                      }}
                      className="c-icon"
                    />
                    <MdDeleteOutline
                      onClick={(event) => handleDelete(event, item?.id)}
                      className="c-icon"
                    />
                  </div>
                </div>
                <Card.Text>
                  <p>Name: {item.name}</p>
                  <p>Address Line 1: {item.address_line_1}</p>
                  <p>Address Line 2: {item.address_line_2}</p>
                  <p>Post Code: {item.postcode}</p>
                  <p>Phone: {item.phone}</p>
                  <p>Email: {item.email}</p>
                </Card.Text>
                <div className="d-flex justify-content-start">
                  <Button 
                    variant={item.is_default_billing ? "primary" : "light"}
                    className="text-capitalize rounded-0 nav-link active mt-2 mr-2 p-2"
                    onClick={() => handleDefaultBilling(item.id)}
                  >
                    Default billing
                    
                  </Button>
                  <Button 
                    variant={item.is_default_shipping ? "primary" : "light"}
                    className="text-capitalize rounded-0 nav-link active mt-2 mr-2 p-2"
                    onClick={() => handleDefaultShipping(item.id)}
                  >
                    Default shipping
                  </Button>
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