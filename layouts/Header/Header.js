import Link from "next/link";
import React, {Fragment, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaUserCircle} from "react-icons/fa";
import {MdOutlineLogout} from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "next/image";
import Logo from "../../public/logo/LOGO.png";
import {BiAlignLeft} from "react-icons/bi";
import {CiUser} from "react-icons/ci";
import CartOverlys from "./CartOverlay";
import Overlay from "./Overlay";
import {fetchCategories} from "../../services/CategoryServices";
import {isLoggedIn, logout} from "../../utils/auth";

export default function Header() {

	const [storedToken, setStoredToken] = useState();
	const [categories, setCategories] = useState([]);
	const [reIsLoggedIn, setReIsLoggedIn] = useState(false);

	useEffect(() => {
		if (isLoggedIn()) {
			setReIsLoggedIn(isLoggedIn());
		}
	}, [])

	useEffect(() => {
		setStoredToken(localStorage?.getItem("token"));


		fetchCategories({
			paginate: 'no'
		}).then((response) => {
			if (response?.data) {
				setCategories(response.data);
			}
		});
	}, []);

	return (
		<Fragment>
			<header>

				{/*Tobpar*/}
				<section className="theme-bg">
					<Container className="">
						<div>
							<ul className="font-poppins manu-font-one text-white d-flex justify-content-end align-items-center py-1">
								<li className="pe-3">
									<Link href="/how-to-buy" className="text-light">
										How to buy
									</Link>
								</li>
								<li className="pe-3">
									<Link href="/b2b" className="text-light">
										B2B Sales
									</Link>
								</li>
								{reIsLoggedIn ? (
									<Fragment>
										<li className="pe-3 login-modal">
											<Link href="/my-account" className="text-light">
												my account
											</Link>
										</li>
										<li className="">
											<Link href="/auth/logout" className="text-light" onClick={(e) => {
												e.preventDefault()
												logout();
											}}>
												logout
											</Link>
										</li>
									</Fragment>
								) : (
									<Fragment>
										<li className="pe-3 login-modal">
											<Link href="/auth/login" className="text-light">
												login
											</Link>
										</li>
										<li className="">
											<Link href="/auth/register" className="text-light">
												sign up
											</Link>
										</li>
									</Fragment>
								)}
							</ul>
						</div>
					</Container>
				</section>

				{/*Logo & Search*/}
				<Container>
					<div className="d-flex justify-content-between align-items-center main-manu-item">
						<div className="">
							<Link href="/">
								<Image src={Logo} alt="Picture of the author" className="img-fluid brand-logo"/>
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
								{storedToken &&
								<>
									<DropdownButton
										id="dropdown-basic-button"
										className="user-icon border-end"
										title={
											<span className="manu-icon border-0">
												<FaUserCircle size={"25px"}/>
											</span>
										}>
										<Dropdown.Item className="logoutBtn">
											<Link href="/profile/Profile"
												  className="d-flex align-items-center profile-btn text-capitalize">
												<CiUser className="font-16 me-1"/>
												<span className="font-16">account</span>
											</Link>
										</Dropdown.Item>
										<Dropdown.Item className="logoutBtn">
											<Link href="/"
												  className="d-flex align-items-center profile-btn text-capitalize">
												<MdOutlineLogout className="font-16 me-1"/>
												<span className="font-16" onClick={() => {
													localStorage.removeItem("token")
												}}>logout</span>
											</Link>
										</Dropdown.Item>
									</DropdownButton>
								</>
								}

								<CartOverlys/>
							</div>
						</div>
					</div>
				</Container>

				{/* for responsive screen */}
				<section className="bg-dark btn-hover overlay-div">
					<Navbar bg="dark" expand="lg">
						<Container className="px-0" fluid>
							<div className="col-lg-3 col-md-3 me-0" href="#">
								<NavDropdown
									className="p-0 me-auto rounded-0 w-100"
									title={
										<span
											className="text-white font-inter px-4 py-3 d-flex align-items-center categories">
											<BiAlignLeft size={"15px"} className="me-2"/>
											CATEGORIES
										</span>
									}
									id="navbarScrollingDropdown"
								>
									{categories.map((category, key) => {
										return (
											<NavDropdown.Item key={key}
															  className="text-capitalize all-icons text-dark px-4 py-2 d-block font-inter">
												<Link href={`category/${category.id}`} className="cate-drop">
													{category.name}
												</Link>
											</NavDropdown.Item>
										);
									})}
								</NavDropdown>
							</div>
							<div className="col-lg-9" href="#">
								<Overlay/>
							</div>
						</Container>
					</Navbar>
				</section>
			</header>
		</Fragment>
	);
}
