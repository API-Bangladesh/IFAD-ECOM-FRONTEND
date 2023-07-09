import Image from "next/image";
import React from "react";
import CompanyRev from "../../../public/Factory.jpg";
import Aboutus from "../../../public/company/one.jpg";
import QualityPic from "../../../public/company/two.jpg";
import GeneralPic from "../../../public/company/three.jpg";
import MissionPic from "../../../public/company/four.jpg";
import VissionPic from "../../../public/company/five.jpg";
import ValuesPic from "../../../public/company/six.jpg";

const CompanyReview = () => {
	return (
		<>
			<section>
				<div className="review-banner">
					<Image src={CompanyRev} alt="" className="review-img" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="">
								<h2 className="font-32 fw-bold pt-5 font-inter">About Us</h2>
								<p className="font-16 pt-3 pb-3 font-inter text-justify">
									Instituted in 2003&quot; IFAD Multi Products Limited is recognized as one of the largest consumer food producers in
									Bangladesh. It began its journey by erecting one of the largest automated flour mills in the nation and currently
									contends as a major supplier of flour products. Concurrently the company also established itself as one of the
									largest suppliers of salt&quot; both consumer and industrial grade&quot; following a thorough refining process that
									attributes to its superior quality. Currently the company is also a major manufacturer and supplier of Instant
									Noodles&quot; Stick Noodles&quot; a varied range of Biscuits and Cookies&quot; Chips&quot; Custard Cakes&quot; Toast Biscuits&quot; Instant
									Drinks&quot; Chanachur&quot; Lachcha Semai&quot; Puffed Rice&quot; Rice Bran Oil and Bottled Drinking Water extracted from local
									aquifers&quot; all of which has been established in its own industrial park.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mt-5 p-4">
								<Image src={Aboutus} alt="" className="review-about rounded-4" />
							</div>
						</div>

						<div className="col-lg-8">
							<div className="">
								<h2 className="font-32 fw-bold pt-5 font-inter">Quality&quot; Safety and Customer Satisfaction</h2>
								<p className="font-16 pt-3 pb-3 font-inter text-justify">
									IFAD Multi Products Limited strongly believes that customer satisfaction is the essence of the quality and food
									safety Policy. We are committed to manufacture quality wheat products (e.g. Atta&quot; Maida and Suzi)&quot; which are safe
									for human consumption to our customers and end users&quot; in a hygienic and dust free environment. Through Research &
									Development&quot; the company is always working out new types of products for our consumers as part of our pursuit of
									continuous innovation. It is the responsibility of all employees of IFAD Multi Products Limited to follow personal
									hygiene&quot; sanitation&quot; pest control and plant safety rules. The Quality & Food Safety Policy is communicated to all
									employees by displaying it at prominent locations and through awareness sessions. The Top Management of IFAD Multi
									Products Limited is committed to continual improvement of its processes.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mt-5 p-4">
								<Image src={QualityPic} alt="" className="review-about rounded-4" />
							</div>
						</div>

						<div className="col-lg-8">
							<div className="">
								<h2 className="font-32 fw-bold pt-5 font-inter">General Information</h2>
								<p className="font-16 pt-3 pb-3 font-inter text-justify">
									IFAD Multi Products Limited is a BRC&quot; ISO 22000:2005&quot; ISO 14001:2008 and HACCP certified company. IFAD Multi
									Products Limited is currently exporting products to more than 33 countries worldwide including USA&quot; UK&quot; UAE&quot; KSA&quot;
									Qatar and Canada along with local operations&quot; IFAD Multi Products Limited&apos;s web address&quot; www.ifadmultiproducts.com
									will provide you more information about the spread of the company.
									<br />
									<br />
									Ifad Multi Products Ltd. maintains regular interaction with consumers through an official Facebook page called
									Ifad Eggy as well.
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mt-5 p-4">
								<Image src={GeneralPic} alt="" className="review-about rounded-4" />
							</div>
						</div>

						<div className="col-lg-12">
							<div className="p-4">
								<Image src={MissionPic} alt="" className="review-mission rounded-4" />
							</div>
						</div>
						<div className="col-lg-12">
							<div className="p-4">
								<Image src={VissionPic} alt="" className=" rounded-4" />
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<Image src={ValuesPic} alt="" className=" rounded-0" />
				</div>
			</section>
		</>
	);
};

export default CompanyReview;
