import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


const UserInfo = () => {
	const [formdata, setFormData] = useState({
		img: "",
		name: "",
		email: "",
		address: "",
		dob: "",
		gender: "",
		number: "",
	})

	const handleChange = (e) => {
		setFormData({
			...formdata,
			[e.target.name]: e.target.value,
		})
	};

	const handleSubmit = async (e) => {
		// const BASE_URL= 'http://192.168.68.149:4444/ecom';
		e.preventDefault();
		console.log(formdata);
		setFormData({
			img: "",
			name: "",
			email: "",
			address: "",
			dob: "",
			gender: "",
			number: "",
		});
		// try{
		//   const response = await axios.post(`${BASE_URL}/endpoint`,{
		//     companyName: formdata.companyName,
		//     name: formdata.name,
		//     email: formdata.email,
		//     phone: formdata.phone,
		//     comments: formdata.comments,
		//   })
		//     .then((res)=>{
		//       console.log(res);
		//     });
		//     setFormData({
		//       companyName:"",
		//       name:"",
		//       email:"",
		//       phone:"",
		//       comments:""
		//     });
		// }catch(err){
		//   console.log(err.message);
		// }
	};

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
								onChange={handleChange}
								className="rounded-0 form-deco" />
							</Form.Group>
						</Col>
						<Col lg={9}>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Full Name <span className="text-danger"> *</span></Form.Label>
								<Form.Control name="name" type="text" placeholder="Enter Full Name" onChange={handleChange} className="form-padd rounded-0 form-deco" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email<span className="text-danger"> *</span></Form.Label>
								<Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} className="form-padd rounded-0 form-deco" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Address<span className="text-danger"> *</span></Form.Label>
								<Form.Control name="address" type="text" placeholder="Enter your address" onChange={handleChange} className="form-padd rounded-0 form-deco" required />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label for="" className="form-label text-capitalize">
									Date of Birth<span className="text-danger"> *</span>
								</Form.Label>
								<Form.Control
									type="date"
									name="dob"
									onChange={handleChange}
									className="form-padd rounded-0 form-deco"
									required
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Gender</Form.Label>
								<Form.Select name="gender" onChange={handleChange} aria-label="Default select example" className="form-padd rounded-0 form-deco">
									<option> Select gender</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
									<option value="Others">Others</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Phone number<span className="text-danger"> *</span></Form.Label>
								<Form.Control name="number" type="number" placeholder="Enter number" onChange={handleChange} className="form-padd rounded-0 form-deco" required />
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
