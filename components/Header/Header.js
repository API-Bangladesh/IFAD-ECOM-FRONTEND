import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "next/image";
import Logo from "../../public/logo/LOGO.png";
import { BiAlignLeft } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import OffCanvas from "./OffCanvas";
import Overlay from "./Overlay";

export default function Header() {
	const [storedToken, setStoredToken] = useState();

	useEffect(()=>{
		setStoredToken(localStorage?.getItem("token"));
	},[])

	return (
		<>
			<header>
				<section className="theme-bg">
					<Container className="">
						<div>
							<ul className="font-poppins manu-font-one text-white d-flex justify-content-end align-items-center py-1">
								<li className="pe-3">
									<Link href="/howtobuy/HowToBuy" className="text-light">
										How to buy
									</Link>
								</li>
								<li className="pe-3">
									<Link href="/b2b/BtoB" className="text-light">
										B2B Sales
									</Link>
								</li>
								<li className="pe-3 login-modal">
									<Link href="/login/Login" className="text-light">
										login
									</Link>
								</li>
								<li className="">
								<Link href="/login/Registration" className="text-light">
										sign up
									</Link>
								</li>
							</ul>
						</div>
					</Container>
				</section>

				{/* main manu start */}

					<Container>
						<div className="d-flex justify-content-between align-items-center main-manu-item">
							<div className="">
								<Link href="/">
									<Image src={Logo} alt="Picture of the author" className="img-fluid brand-logo" />
								</Link>
							</div>
							<div className="header-form">
								<Form className="d-flex justify-content-between form-item">
									<Form.Control
										type="search"
										placeholder="Search in ifad"
										className="me-2 rounded-0 search-field"
										aria-label="Search"
									/>
									<Button className=" border-0 font-inter fw-semibold rounded-0 form-item-btn">
										Search
									</Button>
								</Form>
							</div>
							<div className="">
								<div className="d-flex justify-content-between align-items-center">
									{ storedToken &&
										<>
										<DropdownButton 
										id="dropdown-basic-button" 
										className="user-icon border-end"
										title={
											<span className="manu-icon border-0">
												<FaUserCircle size={"25px"} />
											</span>
										}>
										<Dropdown.Item  className="logoutBtn">
											<Link href="/profile/Profile" className="d-flex align-items-center profile-btn text-capitalize">
												<CiUser className="font-16 me-1" />
												<span className="font-16">account</span>
											</Link>
										</Dropdown.Item>
										<Dropdown.Item className="logoutBtn">
											<Link href="/" className="d-flex align-items-center profile-btn text-capitalize">
												<MdOutlineLogout className="font-16 me-1" />
												<span className="font-16" onClick={()=>{localStorage.removeItem("token")}}>logout</span>
											</Link>
										</Dropdown.Item>
									   </DropdownButton>
										</>
									}
									<OffCanvas/>
								</div>
							</div>
						</div>
					</Container>
				
				{/* main manu end */}

				<section className="bg-dark btn-hover screen-opacity">
					<Navbar bg="dark" expand="lg">
						<Container className="px-0" fluid>
							<div className="col-lg-3 col-md-3 me-0" href="#">
								<NavDropdown
									className="p-0 mx-auto rounded-0 w-100 "
									title={
										<span className="text-white font-inter px-4 py-3 d-flex align-items-center categories">
											<BiAlignLeft size={"15px"} className="me-2" />
											CATEGORIES
										</span>
									}
									id="navbarScrollingDropdown"
								>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Biscuits
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Chips
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Commodities
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Homecare
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Mustard Oil
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Noodles
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-uppercase all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Snacks
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</div>
							<div className="col-lg-9" href="#">
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto py-0 font-inter manu-font manu-items">
									<Nav.Link as={Link} href="/" className="d-flex align-items-center all-side-icons font-14 me-3 my-2">
											home
									</Nav.Link>
									
									<NavDropdown
										className="p-0  rounded-0 about-btn"
										title={
											<span className=" text-white text-inter py-2 font-14 me-3 d-flex all-side-icons align-items-center">about us</span>
										}
										id="navbarScrollingDropdown"
									>
										<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
											<Link href="/review/Creview" className="cate-drop">
												Company Review
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block">
											<Link href="/bod/Bod" className="cate-drop">
												Board of directors
											</Link>
										</NavDropdown.Item>
									</NavDropdown>
									
									<Nav.Link as={Link} href="/termsAndcondition/TermsAndConditions" className="d-flex align-items-center all-side-icons font-14 me-3 my-2">
										TERMS & CONDITION
									</Nav.Link>
									<Nav.Link as={Link} href="/privacypolicy/PrivacyPolicy" className="d-flex align-items-center all-side-icons font-14 me-3 my-2">
										PRIVACY POLICY
									</Nav.Link>
									<Nav.Link as={Link} href="/deliveryinformation/DeliveryInformation" className="d-flex align-items-center all-side-icons me-3 font-14 my-2">
										DELIVERY
									</Nav.Link>
									<Nav.Link as={Link} href="/contactinformation/ContactInformation" className="d-flex align-items-center all-side-icons font-14 my-2">
										contacts
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
							</div>
							
						</Container>
					</Navbar>
				</section>

				{/* for responsive screen */}
				<section className="bg-dark btn-hover overlay-div">
					<Navbar bg="dark" expand="lg">
						<Container className="px-0" fluid>
							<div className="col-lg-3 col-md-3 me-0" href="#">
								<NavDropdown
									className="p-0 me-auto rounded-0 w-100"
									title={
										<span className="text-white font-inter px-4 py-3 d-flex align-items-center categories">
											<BiAlignLeft size={"15px"} className="me-2" />
											CATEGORIES
										</span>
									}
									id="navbarScrollingDropdown"
								>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Biscuits
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Chips
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Commodities
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Homecare
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Mustard Oil
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Noodles
										</Link>
									</NavDropdown.Item>
									<NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
										<Link href="/allproducts/AllProducts" className="cate-drop">
											Snacks
										</Link>
									</NavDropdown.Item>
								</NavDropdown>
							</div>
							<div className="col-lg-9" href="#">
									<Overlay/>
							</div>
							
						</Container>
					</Navbar>
				</section>
			</header>
		</>
	);
}
