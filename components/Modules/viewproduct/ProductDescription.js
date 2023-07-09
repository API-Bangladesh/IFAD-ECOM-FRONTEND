import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import StarRating from "./StarRating";
import { BsStarFill } from "react-icons/bs";

const ProductDescription = () => {
	const [key, setKey] = useState("home");

	return (
		<>
			<Tabs id="controlled" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 border-0">
				<Tab eventKey="home" title="Description" className="pb-5 ps-0 border-0 font-lato">
					<p className="font-16 font-lato border-top pt-2 border-warning text-justify">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
						text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</Tab>
				<Tab eventKey="spacification" title="Spacification" className="pb-5 font-lato">
					<div className="detail-table border-top border-warning pt-3">
						<table className="table border-gray font-lato">
							<thead>
								<tr>
									<th scope="col">1</th>
									<th scope="col">Name</th>
									<th scope="col" className="fw-normal">
										ifad
									</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th scope="col">2</th>
									<th scope="col">Available Sizes</th>
									<th scope="col" className="fw-normal">
										3kg
									</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th scope="col">3</th>
									<th scope="col">Catagory</th>
									<th scope="col" className="fw-normal">
										Grocery
									</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th scope="col">4</th>
									<th scope="col">Sub Catagory</th>
									<th scope="col" className="fw-normal">
										Atta & Suji
									</th>
								</tr>
							</thead>

							<thead>
								<tr>
									<th scope="col">5</th>
									<th scope="col">Flavor</th>
									<th scope="col" className="fw-normal">
										N/A
									</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th scope="col">6</th>
									<th scope="col">Manufacturer</th>
									<th scope="col" className="fw-normal">
										ifadgroup
									</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th scope="col">7</th>
									<th scope="col">Country Of Origin</th>
									<th scope="col" className="fw-normal">
										Bangladesh
									</th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th scope="col">8</th>
									<th scope="col">BCN</th>
									<th scope="col" className="fw-normal">
										0123456789
									</th>
								</tr>
							</thead>
						</table>
					</div>
				</Tab>
				<Tab eventKey="review" title="Customer Review" className="pb-5 font-lato">
					<div className="border-top border-warning  pt-3">
							<form className="review-form">
						<div className="row">
								<div className="col-lg-4">
									<div className="d-flex justify-content-start w-100">
										<h2 className="font-48 text-warning pe-2 fw-bold font-inter">5.0</h2>
										<div className="">
											<p className="text-capitalize ps-2">avarage rating</p>
											<div className="d-flex justify-content-start align-items-center">
												<div className="d-flex justify-content-start">
													<BsStarFill className="product-review"/>
													<BsStarFill className="product-review"/>
													<BsStarFill className="product-review"/>
													<BsStarFill className="product-review"/>
													<BsStarFill className="product-review"/>
												</div>
												<p className="text-secondary ps-2">( 1 review )</p>
											</div>
										</div>
									</div>

									<div className="mt-3">
										<div className="mb-3">
											<label for="name" className="form-label font-16">
												Name *
											</label>
											<input type="text" className="form-control rounded-0" id="name" placeholder="Enter Your Name" />
										</div>
										<div className="mb-3">
											<label for="email" className="form-label font-16">
												Email *
											</label>
											<input type="email" className="form-control rounded-0 rounded-0" id="email" placeholder="Enter Your Mail" />
										</div>
										<div className="mb-3 form-check">
											<input type="checkbox" className="form-check-input rounded-0" id="checkbox" />
											<label className="form-check-label" for="checkbox">
												I agree that my submitted data is being collected and stored. *
											</label>
										</div>
										
									</div>
								</div>
								<div className="col-lg-8">
									<div className="">
										<p className="text-capitalize font-16">give your review *</p>
										<StarRating/>
										<label for="textarea" className="form-label font-16">Your comment *</label>
										<div className="form-floating">
											<textarea className="form-control rounded-0" placeholder="Leave a comment here" id="textarea" style={{height: "150px"}}></textarea>
											<label for="floatingTextarea2">Comments</label>
										</div>
										<button type="submit" className="btn btn-primary submit-btn rounded-0 mt-3 px-5 py-2">
											Submit
										</button>
									</div>
								</div>
						</div>
							</form>
					</div>
				</Tab>
			</Tabs>
		</>
	);
};

export default ProductDescription;
