import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


const UserInfo = () => {
	return (
		<>
			<div className="user-information">
				<Form>
					<Row>
						<h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">account information</h1>
						<Col lg={3}>
							<div className="d-flex justify-content-center">
								<Image src="https://img.freepik.com/free-photo/happy-successful-young-manager-portrait_1262-16187.jpg?w=360" alt="profile" height="200" weight="200" className="profile-picture mb-3" />
							</div>
							<Form.Group controlId="formFile" className="mb-3">
								<Form.Control type="file" className="rounded-0 form-deco" />
							</Form.Group>
						</Col>
						<Col lg={9}>
							
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Full Name <span className="text-danger"> *</span></Form.Label>
								<Form.Control type="text" placeholder="Enter Full Name" className="form-padd rounded-0 form-deco" required/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email<span className="text-danger"> *</span></Form.Label>
								<Form.Control type="email" placeholder="Enter email" className="form-padd rounded-0 form-deco" required/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Address<span className="text-danger"> *</span></Form.Label>
								<Form.Control type="text" placeholder="Enter your address" className="form-padd rounded-0 form-deco" required/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
							
                  <Form.Label for="" className="form-label text-capitalize">
                    Date of Birth<span className="text-danger"> *</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name=""
                    id="date"
                    className="form-padd rounded-0 form-deco"
										required
                  />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Gender</Form.Label>
								<Form.Select aria-label="Default select example" className="form-padd rounded-0 form-deco">
									<option> Select gender</option>
									<option value="1">Male</option>
									<option value="2">Female</option>
									<option value="3">Others</option>
								</Form.Select>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Phone number<span className="text-danger"> *</span></Form.Label>
								<Form.Control type="number" placeholder="Enter number" className="form-padd rounded-0 form-deco" required/>
							</Form.Group>
              <Button type="submit" variant="primary" className="text-capitalize font-18 px-5 mb-4 user-sub-btn rounded-0 font-lato">submit</Button>{" "}
						</Col>
					</Row>
				</Form>
			</div>
		</>
	);
};
export default UserInfo;
