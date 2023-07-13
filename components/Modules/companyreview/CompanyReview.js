import Image from "next/image";
import React from "react";
import CompanyRev from "../../../public/Factory.jpg";
import Aboutus from "../../../public/company/one.jpg";
import QualityPic from "../../../public/company/two.jpg";
import GeneralPic from "../../../public/company/three.jpg";
import MissionPic from "../../../public/company/four.jpg";
import VissionPic from "../../../public/company/five.jpg";
import ValuesPic from "../../../public/company/six.jpg";
import { Container, Row } from "react-bootstrap";
import MissionImage from "../../../public/mission.png";
import VisionImage from "../../../public/vision.png";
import ValuePicOne from "../../../public/values/1.png";
import ValuePicTwo from "../../../public/values/2.png";
import ValuePicThree from "../../../public/values/3.png";
import ValuePicFour from "../../../public/values/4.png";
import ValuePicFive from "../../../public/values/5.png";
import ValuePicSix from "../../../public/values/6.png";

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


					</div>
				</div>

			</section>
			<section id="missionVission" className="values">
				<div className="container">
					<div className="row">
						<div className="">
							<div className="d-flex justify-content-between">
								<div className="text-center">
									<Image
										src={MissionImage}
										alt="vision"
										height={150}
										width={150}
									/>
								</div>
								<h1 className="text-center text-capitalize font-poppins fw-bold pt-5 font-40">
									our <span className="theme-color"> mission</span>
								</h1>
							</div>
							<div className=" mission">
								<div>
									<p className="text-justify px-3 pb-5 font-20">
										Our mission is to satisfy the need of the consumers by
										offering them high quality products and solutios at the
										right place at right value . We will do that by driving
										continuous onnovations, process improvements, people
										development while adding value for all stakeholders.
									</p>
								</div>
							</div>
						</div>
						<div className="">
							<div className="d-flex justify-content-between">
								<div className="text-center">
									<Image
										src={VisionImage}
										alt="vision"
										height={150}
										width={150}
									/>
								</div>
								<h1 className="text-center text-capitalize font-poppins fw-bold pt-5 font-40">
									our <span className="theme-color"> vision</span>
								</h1>
							</div>
							<div className=" mission">
								<div>
									<p className="text-justify px-3 pb-4 font-20	">
										To delight consumers by providing high quality and affordable
										products that creates happy and healthy lives.
									</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* value part */}
			<section>
				<Container className="pb-4">
					<Row>
						<h1 className="text-center text-capitalize font-poppins fw-bolder py-4 font-40">
							our <span className="theme-color"> values</span>
						</h1>
						<div className="col-lg-7 d-flex justify-content-start value-items">
							<div className="col-lg-1">
								<Image
									src={ValuePicOne}
									alt=""
									height={70}
									width={70}
									className="value-image"
								/>
							</div>
							<div className="col-lg-11 d-flex align-items-center">
								<p className="font-20 ps-3">
									<span className="fw-bold logo-color">
										Consumer/Customer Focus:{" "}
									</span>
									Keeping consumers at the forefront of all our actions and
									decisions.
								</p>
							</div>
						</div>
						<div className="col-lg-7 d-flex justify-content-start value-items">
							<div className="col-lg-1">
								<Image
									src={ValuePicTwo}
									alt=""
									height={70}
									width={70}
									className=""
								/>
							</div>
							<div className="col-lg-11 d-flex align-items-center">
								<p className="font-20 ps-3">
									<span className="fw-bold logo-color">Innovative: </span>
									Continuously innovate products to stay ahead of time.
								</p>
							</div>
						</div>
						<div className="col-lg-7 d-flex justify-content-start value-items">
							<div className="col-lg-1">
								<Image
									src={ValuePicThree}
									alt=""
									height={70}
									width={70}
									className=""
								/>
							</div>
							<div className="col-lg-11 d-flex align-items-center">
								<p className="font-20 ps-3">
									<span className="fw-bold logo-color">Quality First: </span>
									Maintain highest quality standard of product services and
									prople.
								</p>
							</div>
						</div>

						<div className="col-lg-7 d-flex justify-content-start value-items">
							<div className="col-lg-1">
								<Image
									src={ValuePicFour}
									alt=""
									height={70}
									width={70}
									className=""
								/>
							</div>
							<div className="col-lg-11 d-flex align-items-center">
								<p className="font-20 ps-3">
									<span className="fw-bold logo-color">Accountability: </span>
									prople are empowered and accountable for deliverables
								</p>
							</div>
						</div>
						<div className="col-lg-7 d-flex justify-content-start value-items">
							<div className="col-lg-1">
								<Image
									src={ValuePicFive}
									alt=""
									height={70}
									width={70}
									className=""
								/>
							</div>
							<div className="col-lg-11 d-flex align-items-center">
								<p className="font-20 ps-3">
									<span className="fw-bold logo-color">Integrity: </span>
									Maintain highest level of honesty and transparency.
								</p>
							</div>
						</div>
						<div className="col-lg-7 d-flex justify-content-start value-items">
							<div className="col-lg-1">
								<Image
									src={ValuePicSix}
									alt=""
									height={70}
									width={70}
									className=""
								/>
							</div>
							<div className="col-lg-11 d-flex align-items-center">
								<p className="font-20 ps-3">
									<span className="fw-bold logo-color">Passionate Team: </span>
									Work as a winning collaborative and passionate team in driving
									excellence.
								</p>
							</div>
						</div>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default CompanyReview;
