import React, {Fragment, useEffect, useState} from "react";
import Image from "next/image";
import Api from "../../public/API-footer-logo.png";
import Link from "next/link";
import {FaFacebookF, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {IoIosArrowRoundForward} from "react-icons/io";
import {fetchSocial} from "../../services/CommonServices";
import PaymentImage from "../../public/payment3.png";

export default function Footer() {
  const [socials, setSocials] = useState([]);

  // fetch
  useEffect(() => {
    fetchSocial().then((response) => {
      if (response?.data) {
        setSocials(response.data[0]?.content_item);
      }
    });
  }, []);

  return (
      <Fragment>
        <div className="container-fluid footer">
          <div className="container">
            <div className="row">
              <div className="swiper">
                <div className="row position-relative">
                  <div className="col-sm-12 d-flex justify-content-center py-4 border-bottom">
                    <nav className="navbar navbar-expand-lg">
                      <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon col-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse footer-bg-opacity " id="navbarNav">
                          <ul className="navbar-nav text-sm-center bg-phn">
                            <li className="nav-item">
                              <Link
                                  href="/company-profile"
                                  className="nav-link-ifad"
                              >
                                about us
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                  href="/privacy-policy"
                                  className="nav-link-ifad"
                              >
                                privacy & policy
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                  href="/terms-and-conditions"
                                  className="nav-link-ifad"
                              >
                                terms & conditions
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                  href="/refund-policy"
                                  className="nav-link-ifad"
                              >
                                refund policy
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                  href="/delivery-information"
                                  className="nav-link-ifad"
                              >
                                Delivery Information
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-sm-3">
                    <a href="https://ifadgroup.com/" target="_blank">
                    <img alt="logo" src="/logo/footer-logo.png" 
                  className="img-fluid footer-logo" loading="lazy" />
                    </a>
                    </div>
                  <div className="col-sm-6 d-flex justify-content-center">
                    <nav className="navbar navbar-expand-lg text-center">
                      <ul className="navbar-nav">
                        <li className="nav-item footer-manu-item">
                          <Link
                            href="/auth/login"
                            className="nav-link-ifad"
                          >
                            login
                          </Link>
                         </li>
                        <li className="nav-item footer-manu-item">
                          <Link
                            href="/checkout"
                            className="nav-link-ifad"
                          >
                            checkout
                          </Link>
                         </li>
                        <li className="nav-item footer-manu-item">
                          <Link
                            href="/my-account"
                            className="nav-link-ifad"
                          >
                            my account
                          </Link>
                         </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-sm-3">
                    <div className="d-flex flex-row justify-content-end fs-4 text-white footer-social-icon">
                      <div className="d-flex justify-content-center align-items-center" style={{marginTop: '5px'}} >
                      {socials?.map((social, index) =>
                   
                        <Link key={index}
                            href="https://www.facebook.com/Ifadfoods"
                            target="_blank"
                        >
                          {index === 0 && <FaFacebookF size={"25px"} className="footer-soical-link ms-2" />}
                          {index === 1 && <FaLinkedinIn size={"25px"} className="footer-soical-link ms-2" />}
                          {index === 2 && <FaYoutube size={"25px"} className="footer-soical-link ms-2" />}
                          {index === 3 && <AiOutlineInstagram size={"25px"} className="footer-soical-link ms-2" />}
                        </Link>
                     
                  )}
                      </div>
                      <div className="call-to-action">
                       <h6 className="footer-soical-link ms-2"> | 09612114444 </h6>
                        {/* <img alt="Call" 
                      src="/call.png" width={110} height={45}/> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3">
                  <img src="/payment-full-size.png" alt="payment-logo" />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center shadow-inner footer-bg  ">
          <div className="d-flex justify-content-center">
            <p className="text-center text-light p-0 mt-3 mb-3 pe-2 font-lato copyrights">
              © 2023 IFAD Group. All Rights Reserved | Developed by{" "}
            </p>
            <Link href="https://api.net.bd/" target="_blank">
              <Image src={Api} alt="" className="logo-resize "/>
            </Link>
          </div>
        </footer>
      </Fragment>
  );
}