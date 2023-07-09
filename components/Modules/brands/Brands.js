import Slider from "react-slick";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Logo1 from "../../../public/Brand-Logo/1.png";
import Logo2 from "../../../public/Brand-Logo/2.png";
import Logo3 from "../../../public/Brand-Logo/3.png";
import Logo4 from "../../../public/Brand-Logo/4.png";
import Logo5 from "../../../public/Brand-Logo/5.png";
import Logo6 from "../../../public/Brand-Logo/6.png";
import Logo7 from "../../../public/Brand-Logo/7.png";
import Logo8 from "../../../public/Brand-Logo/8.png";
import Logo9 from "../../../public/Brand-Logo/9.png";
import Logo10 from "../../../public/Brand-Logo/10.png";
import Logo11 from "../../../public/Brand-Logo/11.png";
import Logo12 from "../../../public/Brand-Logo/12.png";
import Logo13 from "../../../public/Brand-Logo/13.png";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";

const Brands = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrow: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
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
			<section className="brands-part pb-4">
				<div className="container">
					<div className="row">
						<h1 className="text-uppercase pt-5 fw-bold text-center font-inter fs-1 pb-3">brands</h1>
						<Slider {...settings}>
							<div className="d-flex justify-content-center">
								<Image src={Logo1} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo2} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo3} alt="Picture of the author" className="pt-3 brands-size" />
							</div>

							<div className="d-flex justify-content-center">
								<Image src={Logo4} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo3} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo4} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo5} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo6} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo7} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo8} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo9} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo10} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo11} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo12} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
							<div className="d-flex justify-content-center">
								<Image src={Logo13} alt="Picture of the author" className="pt-3 brands-size" />
							</div>
						</Slider>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="support py-4">
				<Container>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="support-div mb-4 border rounded">
								<div className="p-3 shadow rounded">
									<MdOutlineVerifiedUser className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">100% percent secured</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6">
							<div className="support-div mb-4 border rounded ">
								<div className="p-3 shadow rounded">
									<RiServiceLine className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">24 hours / 7days support</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 ">
							<div className="support-div mb-4 border rounded ">
								<div className="p-3 shadow rounded">
									<BsTruck className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">free delivary with $50</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 col-sm-6 ">
							<div className="support-div mb-4 border rounded">
								<div className="p-3 shadow rounded">
									<IoIosPricetags className="support-icons font-40"/>
									<p className="text-capitalize text-center font-16 fw-semibold py-3">best price guaranteed</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Brands;
