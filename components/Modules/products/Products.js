import React, { useEffect, useState } from "react";
import ProductBanner from "../../../public/product.png";
import ProductOne from "../../../public/products/product6.png";
import ProductTwo from "../../../public/products/product1.png";
import ProductThree from "../../../public/products/product3.png";
import ProductFour from "../../../public/products/product4.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Pagination from "../pagination/Paginate"
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";

const Products = () => {
	const BASE_URL= 'http://192.168.68.149:4444/ecom';

	//Client side data fetching using useEffect
	const [categories, setCategories] = useState(null);

	const fetchCategoryData = async () =>{
		await axios.get(`${BASE_URL}/combo-categories`)
		.then((res)=>{
			const categoriesData = res.data.data;
			setCategories(categoriesData);
		})
	}

	useEffect(()=>{
		fetchCategoryData();
	},[])
	console.log(categories);

	//static data fetching using getStaticProps
	// to use this function desctructure {categoriesData} and map it
	// async function getStaticProps(){
	// 	const res = await axios.get(`${BASE_URL}/combo-categories`);
	// 	const categoriesData = res.data.data;
	// 	console.log(categoriesData);
	// 	return{
	// 		props:{
	// 			categoriesData,
	// 		},
	// 	};
	// }
	// getStaticProps();

	return (
		<>
			<section>
				<div className="product-banner">
					<Image src={ProductBanner} alt="" className="product-banner" />
				</div>
				<div className="container">
					<div className="w-100">
						<h1 className="fw-bolder text-center mt-5 font-40 font-inter our-product">Our Products</h1>
						<p className="font-lato text-center font-18 mb-5 product-des">
							We Are Restocking as Quickly as Possible. Come Back 7/30 to OrderMore of These Flavors Inspired by the Places You Call
							Home!
						</p>
					</div>

					<div className="row">
						<div className="col-lg-3 col-md-4 col-sm-4">
							<ul className="stickyContent list-unstyled text-start ps-5 font-20 lh-lg card-border py-3 ">
							{
								categories?.map((item)=>(
									<li>
									<button className="d-flex category-btn">
										<IoIosArrowRoundForward className="icon-space me-2" />
										<span> {item.name }</span>
									</button>
									</li>
								))
							}
								{/* <li>
									<button className="d-flex category-btn">
										<IoIosArrowRoundForward className="icon-space me-2" />
										<span> All</span>
									</button>
								</li>
								<li>
									<button className="d-flex category-btn">
										<IoIosArrowRoundForward className="icon-space me-2" />
										<span> Biscuits</span>
									</button>
								</li>
								<li>
									<button className="d-flex category-btn">
										<IoIosArrowRoundForward className="icon-space me-2" />
										<span> Snacks</span>
									</button>
								</li> */}
							</ul>
						</div>

						<div className="col-lg-9 col-md-8 col-sm-9">
							<div className="row">

								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductTwo} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductThree} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductFour} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductTwo} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductFour} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductThree} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductOne} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductTwo} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 text-center">
									<div className="card-border mb-4">
										<div className="">
											<Link href="/singleproduct/SingleProduct" className="">
												<Image src={ProductThree} alt="" className="product-img mt-3 pb-3 mx-auto d-block" />
											</Link>
										</div>
										<h4 className="text-capitalize font-lato producttitle mt-1 font-16">ifad wavy chips</h4>
										<p className="text-capitalize font-lato m-0 text-secondary font-12">snacks</p>
										<p className="text-capitalize font-lato pb-2 font-14">price : 320/-</p>
										<div className="d-flex justify-content-center  mb-3">
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
													<span className="fw-normal font-lato">add to cart</span>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="my-3 d-flex justify-content-center">
								<Pagination />
							</div>
						</div>
					</div>
				</div>

			</section>
		</>
	);
};

export default Products;
