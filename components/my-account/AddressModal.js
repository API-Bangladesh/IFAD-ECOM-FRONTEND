import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import { API_URL } from "../../utils/constants";

const AddressModal = ({
  show,
  handleClose,
  myAddress,
  handleChange,
  createAddress,
  isEditing
}) => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');

  useEffect(() => {
    setSelectedDivision('');
    setSelectedDistrict('');
    setSelectedUpazila('');

    fetch(`${API_URL}/ecom/divisions`)
      .then(response => response.json())
      .then(data => {
        setDivisions(data);
        setDistricts([]);
        setUpazilas([]);
      })
      .catch(error => console.error('Error fetching divisions:', error));
  }, [show]);

  const handleDivisionChange = async(e) => {
    handleChange(e)
    setDistricts([])
    setUpazilas([])
    setSelectedDivision(e.target.value)
    setSelectedDistrict('')
    setSelectedUpazila('')

    const fetchDistricts = await fetch(`${API_URL}/ecom/districts/divisions/${e.target.value}`)
    const districts = await fetchDistricts.json()
    setDistricts(districts)
  }

  const handleDistrictChange = async(e) => {
    handleChange(e)
    setSelectedDistrict(e.target.value)
    setUpazilas([]) // not necessary
    setSelectedUpazila('')

    const fetchUpazilas = await fetch(`${API_URL}/ecom/upazilas/districts/${e.target.value}`)
    const upazilas = await fetchUpazilas.json()
    setUpazilas(upazilas)
  }

  const handleUpazilaChange = async(e) => {
    handleChange(e)
    setSelectedUpazila(e.target.value)
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Form onSubmit={(e) => createAddress(e)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? "Edit Address" : "Add Address"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address title</Form.Label>
            <Form.Control 
              name='title'
              value={myAddress.title}
              type="text"
              className="rounded-0 form-deco form-padd"
              onChange={handleChange}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
          </Form.Group> */}

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
            <Row>
              <Col sm={4}>
                <Form.Label>Division</Form.Label>
                <Form.Select
                  aria-label="Division select"
                  name="division_id"
                  value={selectedDivision}
                  onChange={e => handleDivisionChange(e)}
                >
                  <option>Select division</option>
                  {divisions.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col sm={4}>
                <Form.Label>District</Form.Label>
                <Form.Select
                  aria-label="District select"
                  name="district_id"
                  value={selectedDistrict}
                  onChange={e => handleDistrictChange(e)}
                >
                  <option>Select District</option>
                  {districts.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col sm={4}>
                <Form.Label>Upazila</Form.Label>
                <Form.Select
                  aria-label="Upazila select"
                  name="upazila_id"
                  value={selectedUpazila}
                  onChange={e => handleUpazilaChange(e)}
                >
                  <option>Select Upazila</option>
                  {upazilas.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              {/* <Col sm={6}>
                <Form.Label>District</Form.Label>
                <Form.Control 
                  name='district_id'
                  value={myAddress.district_id}
                  type="text"
                  className="rounded-0 form-deco form-padd"
                  onChange={handleChange}
                />
              </Col> */}
              <Col sm={12}>
                <Form.Label>Post Code</Form.Label>
                <Form.Control 
                  name='postcode'
                  value={myAddress.postcode}
                  type="text"
                  className="rounded-0 form-deco form-padd"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={6}>
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                  name='phone'
                  value={myAddress.phone}
                  type="text"
                  className="rounded-0 form-deco form-padd"
                  onChange={handleChange}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  name='email'
                  value={myAddress.email}
                  type="text"
                  className="rounded-0 form-deco form-padd"
                  onChange={handleChange}
                />
              </Col>
            </Row>
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
             {isEditing ? "Save changes" : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddressModal