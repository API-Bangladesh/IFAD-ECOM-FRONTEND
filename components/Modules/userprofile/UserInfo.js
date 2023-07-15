import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { showErrorNotification, showSuccessNotification } from '../helper/notificationHelper';
import axios from 'axios';
import { token } from '../../../utils/auth';


const UserInfo = () => {
	const [formdata, setFormData] = useState({
		name: "",
		address: "",
		date_of_birth: "",
		gender: "",
		phone_number: "",
	})

	const handleChange = (e) => {
		setFormData({
			...formdata,
			[e.target.name]: e.target.value,
		})
	};

	const handleSubmit = async(e) =>{
		e.preventDefault();
		const data = {
		  name: formdata.name,
		  address: formdata.address,
		  date_of_birth: formdata.date_of_birth,
		  gender: formdata.gender,
		  phone_number: formdata.phone_number,
		};
		const headers = {
		  "Authorization": token(),
		  "Content-Type": "application/json",
		};
		const BASE_URL = "http://192.168.11.93:8000/ecom"
		try{
		  await axios.put(`${BASE_URL}/customers/1`, data, { headers })
			.then((res)=>{
			  console.log(res.data);
			  showSuccessNotification("", res.data.message);
			});
			setFormData({
				name: "",
				address: "",
				date_of_birth: "",
				gender: "",
				phone_number: "",
			});
		}catch(err){
		  console.log(err.message);
		  showErrorNotification("Error!",err.message);
		}
	  }

	return (
		<>
			<div className="user-information">
				<Form onSubmit={handleSubmit}>
					<Row>
						<h1 className="text-capitalize fo nnt-32 fw-bolder font-jost pb-4 ">account information</h1>
						<Col lg={3}>
							<div className="d-flex justify-content-center">
								<Image src="https://img.freepik.com/free-photo/happy-successful-young-manager-portrait_1262-16187.jpg?w=360" alt="profile" height="200" weight="200" className="profile-picture mb-3" />
							</div>
							<Form.Group controlId="formFile" className="mb-3">
								<Form.Control 
								name="img"
								type="file" 
								className="rounded-0 form-deco" />
							</Form.Group>
						</Col>
						<Col lg={9}>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Full Name <span className="text-danger"> *</span></Form.Label>
								<Form.Control name="name" type="text" placeholder="Enter Full Name" value={formdata.name} onChange={handleChange} className="form-padd rounded-0 form-deco" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email<span className="text-danger"> *</span></Form.Label>
								<Form.Control name="email" type="email" placeholder="Enter email" className="form-padd rounded-0 form-deco" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Address<span className="text-danger"> *</span></Form.Label>
								<Form.Control name="address" type="text" placeholder="Enter your address" value={formdata.address}  onChange={handleChange} className="form-padd rounded-0 form-deco" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label for="" className="form-label text-capitalize">
									Date of Birth<span className="text-danger"> *</span>
								</Form.Label>
								<Form.Control
									type="date"
									name="date_of_birth"
									value={formdata.date_of_birth} 
									onChange={handleChange}
									className="form-padd rounded-0 form-deco"
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Gender</Form.Label>
								<Form.Select name="gender" value={formdata.gender}  onChange={handleChange} aria-label="Default select example" className="form-padd rounded-0 form-deco">
									<option> Select gender</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Others">Others</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Phone number<span className="text-danger"> *</span></Form.Label>
								<Form.Control name="phone_number" type="number" placeholder="Enter number"  value={formdata.phone_number} onChange={handleChange} className="form-padd rounded-0 form-deco" required />
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
