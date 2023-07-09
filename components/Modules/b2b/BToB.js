import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import BtoBBanner from "../../../public/b2b.jpg";

const BToB = () => {
	return (
		<>
			<section>
				<div className="btob-banner positon-realtive">
					<Image src={BtoBBanner} alt="" className="btob-image" />
					<h1 className="text-center btob talk-business text-light font-48 font-jost fw-bold">Let&apos;s talk about business</h1>
				</div>
				<Container>
					<Row>
						<Col lg={12}>
							<div className="">
								<h2 className="text-center my-4 font-jost font-30 fw-bold text-secondary">B2B Business Form </h2>
							</div>
						</Col>
						<Col lg={8} className="btob-forms">
							<div className="">
								<p className="float-left font-jost font-16 mb-4">
									Dear customers&apos; <br></br>Please fill out this B2B form if you have any inquiries or want to order products for
									your business from Ifad. Our responsible person will contact you as soon as possible.
								</p>
							</div>
							<div data-aos="fade-up">
								<Form>
									<Form.Group className="mb-3" controlId="">
										<Form.Label>
											Name <span className="text-danger">*</span>
										</Form.Label>
										<Form.Control type="text" placeholder="Enter email" className="rounded-0 btob-input" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="">
										<Form.Label>
											Prodect Name <span className="text-danger">*</span>
										</Form.Label>
										<Form.Control type="text" placeholder="Enter Prodect Name" className="rounded-0 btob-input" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="">
										<Form.Label>Prodect Code (if known)</Form.Label>
										<Form.Control type="number" placeholder="Enter Prodect Code" className="rounded-0 btob-input" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="">
										<Form.Label>
											Prodect quantity <span className="text-danger">*</span>
										</Form.Label>
										<Form.Control type="number" placeholder="Enter Prodect quantity" className="rounded-0 btob-input" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="">
										<Form.Label>
											Contact Number <span className="text-danger">*</span>
										</Form.Label>
										<Form.Control type="number" placeholder="Enter Contact Number" className="rounded-0 btob-input" />
									</Form.Group>
									<Form.Group className="mb-3" controlId="">
										<Form.Label>
											Email Address <span className="text-danger">*</span>
										</Form.Label>
										<Form.Control type="email" placeholder="Enter Email Address" className="rounded-0 btob-input" />
									</Form.Group>

									<Button type="submit" className="btob-submit-btn rounded-0 mb-4 text-dark font-jost font-poppins">
										Submit
									</Button>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default BToB;
