import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import CatImg1 from "../../../public/category/images.png";
import CatImg2 from "../../../public/category/images2.png";
import CatImg3 from "../../../public/category/images3.png";
import CatImg4 from "../../../public/category/images4.png";
import CatImg5 from "../../../public/category/images5.png";
import CatImg6 from "../../../public/category/images6.png";
import CatImg7 from "../../../public/category/images7.png";

const Category = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
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
			}
		]
	};

	return (
		<>
			<section className="categories">
				<div className="container p-0">
					<h1 className="font-24 text-center font-inter pt-3 pb-3 mt-3 mb-3 text-stroke">Categories</h1>
					<div className="row">
						<Slider {...settings}>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2 img-demo">
										<Image src={CatImg1} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												wavy chips
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2">
										<Image src={CatImg2} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												mustard oil
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2">
										<Image src={CatImg7} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												lachacha semai
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2">
										<Image src={CatImg3} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												ifad moida
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2">
										<Image src={CatImg4} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												eggy noodles
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2">
										<Image src={CatImg5} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												snacky muffin
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-lg-4 ">
								<Link href="/allproducts/AllProducts">
									<div className="position-relative mb-3 mx-2">
										<Image src={CatImg6} alt="Picture of the author" className="category-img-one" />
										<div className="wavy-chips position-absolute">
											<p className="position-absolute category-title text-center text-capitalize text-light font-30 fw-bold">
												soft & care
											</p>
										</div>
									</div>
								</Link>
							</div>
						</Slider>
					</div>
				</div>
			</section>
		</>
	);
};

export default Category;
