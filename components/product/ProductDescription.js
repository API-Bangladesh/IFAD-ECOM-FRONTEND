import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, {Fragment, useState} from "react";
import StarRatings from "react-star-ratings";
import {saveReview} from "../../services/ReviewServices";
import {tostify} from "../../utils/helpers";
import {toast} from "react-toastify";

const ProductDescription = ({inventory}) => {
	const [key, setKey] = useState("home");

	const [formData, setFormData] = useState({
		comments: ''
	});

	const handleChange = (event) => {
		event.preventDefault();

		setFormData({
			...formData,
			[event.target.name]: event.target.value
		});
	}

	const handleChangeRating = (value) => {
		setFormData({
			...formData,
			ratting_number: value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!formData?.ratting_number || !formData?.comments) {
			tostify(toast, 'warning', {
				message: "Invalid review data!"
			});
			return false
		}

		saveReview({
			inventory_id: inventory?.id,
			ratting_number: formData?.ratting_number,
			comments: formData?.comments,
		}).then((response) => {
			tostify(toast, 'success', response);
		});
	}


	return inventory?.id && (
		<Fragment>
			<Tabs id="controlled" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 border-0">
				<Tab eventKey="home" title="Description" className="pb-5 ps-0 border-0 font-lato">
					<p className="font-16 font-lato border-top pt-2 border-warning text-justify">
						{inventory?.product?.product_short_desc}
					</p>
				</Tab>
				<Tab eventKey="spacification" title="Spacification" className="pb-5 font-lato">
					<div className="detail-table border-top border-warning pt-3">
						{inventory?.product?.product_long_desc}
					</div>
				</Tab>
				<Tab eventKey="review" title="Customer Review" className="pb-5 font-lato">
					<div className="border-top border-warning  pt-3">
						<div className="row">
							<div className="col-lg-4">
								<div className="d-flex justify-content-start w-100">
									<h2 className="font-48 text-warning pe-2 fw-bold font-inter">5.0</h2>
									<div className="">
										<p className="text-capitalize ps-2">avarage rating</p>
										<div className="d-flex justify-content-start align-items-center">
											<StarRatings
												rating={inventory?.star_ratting}
												starRatedColor="orange"
												numberOfStars={5}
												starDimension={20}
												starSpacing={0}
												name='rating'
											/>
											<p className="text-secondary ps-2">
												( {inventory?.reviews_count} review )
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<form onSubmit={(event) => handleSubmit(event)}>
									<div className="">
										<p className="text-capitalize font-16">
											give your review *
										</p>

										<StarRatings
											rating={2}
											starRatedColor="orange"
											starHoverColor="orange"
											numberOfStars={5}
											starDimension={20}
											starSpacing={0}
											name='rating'
											changeRating={handleChangeRating}
										/>

										<label htmlFor="textarea" className="form-label font-16">
											Your comment *
										</label>
										<div className="form-floating">
												<textarea className="form-control rounded-0" name="comments"
														  placeholder="Leave a comment here" id="textarea"
														  style={{height: "150px"}}
														  onChange={(event) => handleChange(event)}>{formData?.comments}</textarea>
											<label htmlFor="floatingTextarea2">Comments</label>
										</div>
										<button type="submit"
												className="btn btn-primary submit-btn rounded-0 mt-3 px-5 py-2">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Tab>
			</Tabs>
		</Fragment>
	);
};

export default ProductDescription;
