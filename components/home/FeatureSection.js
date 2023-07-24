import Container from "react-bootstrap/Container";
import {MdOutlineVerifiedUser} from "react-icons/md";
import {RiServiceLine} from "react-icons/ri";
import {BsTruck} from "react-icons/bs";
import {IoIosPricetags} from "react-icons/io";

const FeatureSection = () => {
	return (
			<section className="support py-4">
				<Container>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="support-div mb-4 border rounded">
								<div className="p-3 shadow rounded">
									<MdOutlineVerifiedUser className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">
										100% percent secured
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="support-div mb-4 border rounded ">
								<div className="p-3 shadow rounded">
									<RiServiceLine className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">
										24 hours / 7days support
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 ">
							<div className="support-div mb-4 border rounded ">
								<div className="p-3 shadow rounded">
									<BsTruck className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">
										free delivary with $50
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 ">
							<div className="support-div mb-4 border rounded">
								<div className="p-3 shadow rounded">
									<IoIosPricetags className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">
										best price guaranteed
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
	);
};

export default FeatureSection;