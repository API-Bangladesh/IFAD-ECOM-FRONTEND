import React from "react";
import Image from "next/image";
import Payment2 from "../../public/payment2.png";
import Api from "../../public/API-footer-logo.png";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <section className="bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="ps-0">
                <h2 
                  className="pt-5 text-center fw-semibold pb-2 text-uppercase about-border position-relative">
                  about us
                </h2>
                <p className="text-justify font-lato py-3 font-16 about-des">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <ul className="d-flex justify-content-start mb-3 footer-social-icon">
                <li className="me-3">
                  <Link
                    href="https://www.facebook.com/Ifadfoods"
                    target="_blank"
                    className=""
                  >
                    <FaFacebookF size={"25px"} className="soical-link" />
                  </Link>
                </li>
                <li className="me-3 ">
                  <Link
                    href="https://www.linkedin.com/company/ifad-multi-products-limited/"
                    target="_blank"
                    className=""
                  >
                    <FaLinkedinIn size={"25px"} className="soical-link" />
                  </Link>
                </li>
                <li className="me-3 ">
                  <Link
                    href="https://youtube.com/@ifadmultiproductsltd.1884"
                    target="_blank"
                    className=""
                  >
                    <FaYoutube size={"25px"} className="soical-link" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ifad_impl/"
                    target="_blank"
                    className=""
                  >
                    <AiOutlineInstagram size={"25px"} className="soical-link" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="ps-4 information-footer">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase position-relative information-border">
                  information
                </h2>
                <ul className="lh-lg font-lato pt-3 information-list justify-content-center">
                  <li className="text-capitalize footer-list">
                    <Link
                      href="/review/Creview"
                      className=" d-flex align-items-center account-hover"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      about us
                    </Link>
                  </li>
                  <li className="text-capitalize footer-list">
                    <Link
                      href="/privacypolicy/PrivacyPolicy"
                      className=" d-flex align-items-center account-hover"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      privacy & policy
                    </Link>
                  </li>
                  <li className="text-capitalize footer-list">
                    <Link
                      href="/termsAndcondition/TermsAndConditions"
                      className=" d-flex align-items-center account-hover"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      terms & conditions
                    </Link>
                  </li>
                  <li className="text-capitalize footer-list">
                    <Link
                      href="/refundPolicy/RefundPolicy"
                      className=" d-flex align-items-center account-hover"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      refund policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="ps-5 account-footer">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase position-relative account-border">
                  my account
                </h2>
                <ul className="lh-lg font-lato account-list pt-3">
                  <li className="text-capitalize">
                    <Link
                      href="/login/Login"
                      className=" d-flex align-items-center account-hover font-16"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      login
                    </Link>
                  </li>
                  <li className="text-capitalize">
                    <Link
                      href="/"
                      className=" d-flex align-items-center account-hover"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      cart
                    </Link>
                  </li>
                  
                  <li className="text-capitalize">
                    <Link
                      href="/profile/Profile"
                      className=" d-flex align-items-center account-hover"
                    >
                      <IoIosArrowRoundForward size={"20px"} />
                      my account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="">
                <h2 className="pt-5 fw-semibold pb-2 text-uppercase position-relative payment-border">
                  payment option
                </h2>
                <Link href="/" className="pt-3">
                  <Image
                    src={Payment2}
                    alt="Picture of the author"
                    className="payment-img mt-3 mb-3 rounded img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center shadow-inner footer-bg  ">
        <div className="d-flex justify-content-center">
          <p className="text-center text-light p-0 mt-3 mb-3 pe-2 font-lato copyrights">
            © 2023 IFAD Group. All Rights Reserved | Developed by{" "}
          </p>
          <Link href="https://api.net.bd/" target="_blank">
            <Image src={Api} alt="" className="logo-resize " />
          </Link>
        </div>
      </footer>
    </>
  );
}
