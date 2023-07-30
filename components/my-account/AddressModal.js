import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const AddressModal = ({
  show,
  handleClose,
  myAddress,
  handleChange,
  createAddress,
  isEditing
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
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