import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Payment from "../../../public/payment.jpg";
import Card from "../../../public/card.jpg"
import Mobile from "../../../public/mobile.jpeg"
import BankTransfer from "../../../public/bank-transfer.png"

const CheckOut = () => {
	return (
		<>
			<section className=" ">
				<div className="position-relative mn">
					<Image src={Payment} alt="" className="img-fluid payment" />
					<h1 className="pay-banner-text text-light text-uppercase font-48 fw-bold">payment</h1>
				</div>
				<Container>
					<Row>
						<Col lg={8} md={8} className=" mt-4">
							<h1 className="text-uppercase font-24 fw-bold mb-3">BILLING DETAILS</h1>
							<Form>
								<Row>
									<Col lg={6} md={6} className="">
										<Form.Group className="mb-3" controlId="">
											<Form.Label>
												First Name <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="text" placeholder="" className="rounded-0 form-deco" required />
										</Form.Group>
									</Col>
									<Col lg={6} md={6} className="">
										<Form.Group className="mb-3" controlId="">
											<Form.Label>
												Last Name <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="text" placeholder="" className="rounded-0 form-deco" required />
										</Form.Group>
									</Col>
									<Col lg={12} md={12} className="">
										<Form.Group className="mb-3" controlId="">
											<Form.Label>
												Company Name <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="text" placeholder="" className="rounded-0 form-deco" required />
										</Form.Group>
									</Col>
									<Col lg={12} md={12}>
										<Form.Group className="mb-3" controlId="">
											<Form.Label>
												Address <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="text" placeholder="" className="rounded-0 mb-3 form-deco" required />
										</Form.Group>
									</Col>

									<Col lg={12} md={12}>
										<div className="mb-3">
											<Form.Label className="text-capitalize">
												town / city <span className="text-danger">*</span>
											</Form.Label>
											<Form.Select aria-label="Default select example" className="rounded-0 select-shadow" required>
												<option>select country</option>
												<option value="1">Dhaka</option>
												<option value="2">Rajshahi</option>
												<option value="3">Chittagong</option>
											</Form.Select>
										</div>
										<Form.Group className="mb-3" controlId="">
											<Form.Label>
												Postcode / Zip <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="text" placeholder="" className="rounded-0 form-deco" required />
										</Form.Group>
									</Col>

									<Col lg={6} md={6} className="">
										<Form.Group className="mb-3" controlId="">
											<Form.Label>
												Phone <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="text" placeholder="" className="rounded-0 form-deco" required />
										</Form.Group>
									</Col>
									<Col lg={6} md={6} className="">
										<Form.Group className="mb-3" controlId="">
											<Form.Label className="font-lato">
												Email Address <span className="text-danger">*</span>
											</Form.Label>
											<Form.Control type="email" placeholder="" className="rounded-0 form-deco" required />
										</Form.Group>
									</Col>
								</Row>
								<Button
									type="submit"
									variant="primary"
									className="rounded-0 checkout-sub-btn px-5 py-2 mb-4 text-capitalize font-16 font-lato"
								>
									submit
								</Button>
							</Form>
						</Col>
						<Col lg={4} md={4} className=" my-4">
							<div className="payment-card p-3">
								<h2 className="text-uppercase font-24 fw-bold ps-2">your order</h2>
								<table className="table">
									<thead>
										<tr>
											<th scope="col">Product</th>
											<th scope="col" className="text-end">
												Total
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" className="fw-normal text-capitalize font-16 ">
												pillow chips
											</th>
											<td className="text-end"> 100Tk</td>
										</tr>
										<tr>
											<th scope="row" className="fw-normal text-capitalize font-16 ">
												wavy chips
											</th>
											<td className="text-end">200Tk</td>
										</tr>
										<tr>
											<th scope="row" className="fw-normal text-capitalize font-16 ">
												choco delight
											</th>
											<td className="text-end">200Tk</td>
										</tr>
									</tbody>
								</table>
								<div className="">
									<div className="d-flex justify-content-center">
										<p className="font-lato text-capitalize font-20 pe-2">subtotal :- </p>
										<p className=" font-20 ">1000 Tk</p>
									</div>
									<div className="d-flex justify-content-center">
										<p className="font-lato text-warning text-capitalize font-20 pe-2">total :- </p>
										<p className="font-20 theme-text">1000 Tk</p>
									</div>
								</div>
								<div className="mt-3">
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
										<label className="form-check-label text-capitalize" for="inlineRadio1">
											online payment
										</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
										<label className="form-check-label text-capitalize" for="inlineRadio2">
											cash on delivery
										</label>
									</div>
								</div>
								<div className="">
									<button className="text-capitalize font-16 w-100 place-order mt-4 font-lato fw-bold theme-text">
										place order
									</button>
								</div>
							</div>

							<div className="">
								<p className="text-capitalize py-3 font-16">online payment by SSLCommerz :</p>  
								<div className="row">
                  <Col lg={4} md={6} className="mb-3">
                    <p className="text-capitalize text-center pb-2">card</p>
                    <Image src={Card} alt="card" className=" card-payment rounded-1 shadow"/>
                  </Col>
                  <Col lg={4} md={6} className="mb-3">
                    <p className="text-capitalize text-center pb-2">bank transfer</p>
                    <Image src={BankTransfer} alt="card" className=" transfer-payment rounded-1 shadow"/>
                  </Col>
                  <Col lg={4} md={8} className="mb-3">
                    <p className="text-capitalize text-center pb-2">mobile banking</p>
                    <Image src={Mobile} alt="card" className=" card-payment rounded-1 shadow"/>
                  </Col>
                </div>
							</div>
						</Col>
					</Row>
				</Container>	
			</section> 
		</>
	);
};

export default CheckOut;
