import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Card from "react-bootstrap/Card";


const ComboPack = ({title, image, image2,image3, producttitle, producttitle2, producttitle3}) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 2500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrow: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<section className="combo-pack">
				<div className="container border-top m- p-0">
					<div className="header-title mt-4 mb-3 position-relative rounded">
						<h1 className="text-center font-24 text-capitalize font-inter py-3 combo-title">{title}</h1>
						<Link href="/allproducts/AllProducts">
							<div className="d-flex justify-content-center combo-btn bg-white px-3 py-2 position-absolute rounded-pill">
								<p className=" font-16 fw-semibold view-all">View all</p>
								<BsArrowRight className="arrow ms-2" />
							</div>
						</Link>
					</div>
				</div>

				<div className="container pb-4">
					<div className="row">
						<div className="col-lg-12 col-md-12 p-0">
								<Slider {...settings}>
										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0">
													<div className="combo-img-bg position-relative">
													<Link href="/singleproduct/SingleProduct">
														<Image src={image} className=" card-img-top mt-4 mb-4" alt="..." />
													</Link>
														<div className="position-absolute offer-token text-center">
															<span className="text-white veri-align fw-semibold font-14 pt-2">-30%</span>
														</div>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle}</Card.Title>
														<del>
															<Card.Text className="text-center text-capitalize">
																Price:- 150/-
															</Card.Text>
														</del>
														<Card.Text className="text-center pb-3 text-capitalize">
															offer Price:- 105/-
														</Card.Text>
														<div className="d-flex justify-content-center">
															<Link href="/payments/Payments"
																className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
															>
																buy now
															</Link>
															<button
																type="button"
																className="btn btn-success buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
															>
																<div className="d-flex justify-content-between text-center font-14 pe-0">
																	<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
																	<span className="fw-normal font-lato ad-card-btn">add to cart</span>
																</div>
															</button>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0">
													<div className="combo-img-bg position-relative">
														<Link href="/singleproduct/SingleProduct">
															<Image src={image2} className=" card-img-top mt-4 mb-4" alt="..." />
														</Link>
														<div className="position-absolute offer-token text-center">
															<span className="text-white veri-align fw-semibold font-14 pt-2">-30%</span>
														</div>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle2}</Card.Title>
														<del>
															<Card.Text className="text-center text-capitalize">
																Price:- 150/-
															</Card.Text>
														</del>
														<Card.Text className="text-center pb-3 text-capitalize">
															offer Price:- 105/-
														</Card.Text>
														<div className="d-flex justify-content-center">
															<Link href="/payments/Payments"
																className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
															>
																buy now
															</Link>	
															
															<button
																type="button"
																className="btn btn-warning buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
															>
																<div className="d-flex justify-content-between text-center font-14 pe-0">
																	<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
																	<span className="fw-normal font-lato ad-card-btn">add to cart</span>
																</div>
															</button>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0">
													<div className="combo-img-bg position-relative">
														<Link href="/singleproduct/SingleProduct">
															<Image src={image3} className=" card-img-top mt-4 mb-4" alt="..." />
														</Link>
														<div className="position-absolute offer-token text-center">
															<span className="text-white veri-align fw-semibold font-14 pt-2">-30%</span>
														</div>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle3}</Card.Title>
														<del>
															<Card.Text className="text-center text-capitalize">
																Price:- 150/-
															</Card.Text>
														</del>
														<Card.Text className="text-center pb-3 text-capitalize">
															offer Price:- 105/-
														</Card.Text>
														<div className="d-flex justify-content-center">
															<Link href="/payments/Payments"
																className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
															>
																buy now
															</Link>
															
															<button
																type="button"
																className="btn btn-warning buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
															>
																<div className="d-flex justify-content-between text-center font-14 pe-0">
																	<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
																	<span className="fw-normal font-lato ad-card-btn">add to cart</span>
																</div>
															</button>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>

										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0">
													<div className="combo-img-bg position-relative">
														<Link href="/singleproduct/SingleProduct">
															<Image src={image} className=" card-img-top mt-4 mb-4" alt="..." />
														</Link>
														<div className="position-absolute offer-token text-center">
															<span className="text-white veri-align fw-semibold font-14 pt-2">-30%</span>
														</div>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle}</Card.Title>
														<del>
															<Card.Text className="text-center text-capitalize">
																Price:- 150/-
															</Card.Text>
														</del>
														<Card.Text className="text-center pb-3 text-capitalize">
															offer Price:- 105/-
														</Card.Text>
														<div className="d-flex justify-content-center">
															<Link href="/payments/Payments"
																className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
															>
																buy now
															</Link>
															
															<button
																type="button"
																className="btn btn-warning buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
															>
																<div className="d-flex justify-content-between text-center font-14 pe-0">
																	<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
																	<span className="fw-normal font-lato ad-card-btn">add to cart</span>
																</div>
															</button>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>
										<div className="mt-0">
											<div className="ms-3 me-3 mb-3">
												<Card className="shadow rounded-0">
													<div className="combo-img-bg position-relative">
														<Link href="/singleproduct/SingleProduct">
															<Image src={image2} className=" card-img-top mt-4 mb-4" alt="..." />
														</Link>
														<div className="position-absolute offer-token text-center">
															<span className="text-white veri-align fw-semibold font-14 pt-2">-30%</span>
														</div>
													</div>
													<Card.Body>
														<Card.Title className="text-center text-capitalize font-18">{producttitle2}</Card.Title>
														<del>
															<Card.Text className="text-center text-capitalize">
																Price:- 150/-
															</Card.Text>
														</del>
														<Card.Text className="text-center pb-3 text-capitalize">
															offer Price:- 105/-
														</Card.Text>
														<div className="d-flex justify-content-center">
															<Link href="/payments/Payments"
																className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
															>
																buy now
															</Link>
															
															<button
																type="button"
																className="btn btn-warning buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
															>
																<div className="d-flex justify-content-between text-center font-14 pe-0">
																	<AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"} />
																	<span className="fw-normal font-lato ad-card-btn ">add to cart</span>
																</div>
															</button>
														</div>
													</Card.Body>
												</Card>
											</div>
										</div>


									
								</Slider>
						</div>


					</div>
				</div>
			</section>

		
        

				
		</>
	);
};

export default ComboPack;
