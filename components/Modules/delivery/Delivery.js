import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "next/image"
import DeliveryBanner from "../../../public/delivery.jpg"
import { AiFillCaretRight } from "react-icons/ai";


const Contact = () => {
  return (
    <>
      <section>
        <div className="terms-banner-div">
          <Image src={DeliveryBanner} alt="" className="terms-banner"/>
        </div>
        <Container>
          <div className="text-center d-">
            <h2 className="text-capitalize pt-5 font-40 font-jost fw-bold delivery-title">delivery information</h2>
            <div className=" d-flex justify-content-center ">
              <p className="text-capitalize font-16 font-inter delivery-para pb-5">this document sets out the shipping policy that applies to customers that
                make a purchase at [website]. if you have any questions please contact our customer service team on [phone number] or [email address]
              </p>
            </div>
          </div>
          <Row>
            <Col lg={10} className="delivery-details">
              <div>
                <div className="d-flex justify-content-start"> 
                  <AiFillCaretRight/><h5 className="text-capitalize pb-2 ps-2 font-inter font-16 fw-bold">shipping options & delivery costs</h5>
                </div>
                <p className="text-capitalize font-inter font-16 ps-4 pb-4"> we are the following shipping  options .
                   you will be asked to select a shipping method at checkout.</p>
              </div>
              <div>
                <div className="d-flex justify-content-start"> 
                  <AiFillCaretRight/><h5 className="text-capitalize pb-2 ps-2 font-inter font-16 fw-bold">order processing time</h5>
                </div>
                <p className="text-capitalize text-justify font-inter font-16 ps-4 pb-4">all orders placed before 2PM monday to friday are processed and dispatched the same day. all orders placed after will be dispatched the next day. all orders placed during the weekend or on a public holiday will be sent from our warehouse on monday or on the next business day.</p>
              </div>
              <div>
                <div className="d-flex justify-content-start"> 
                  <AiFillCaretRight/>
                  <h5 className="text-capitalize pb-2 ps-2 font-inter font-16 fw-bold">delivery address & p.o boxes</h5>
                </div>
                <p className="text-capitalize text-justify font-inter font-16 ps-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.</p>
              </div>
              <div>
                <div className="d-flex justify-content-start"> 
                  <AiFillCaretRight/>
                  <h5 className="text-capitalize pb-2 ps-2 font-inter font-16 fw-bold">international orders</h5>
                </div>
                <p className="text-capitalize text-justify font-inter font-16 ps-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.</p>
              </div>
              <div>
                <div className="d-flex justify-content-start"> 
                  <AiFillCaretRight/>
                  <h5 className="text-capitalize pb-2 ps-2 font-inter font-16 fw-bold">tracking your orders</h5>
                </div>
                <p className="text-capitalize text-justify font-inter font-16 ps-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.</p>
              </div>
              <div>
                <div className="d-flex justify-content-start"> 
                  <AiFillCaretRight/>
                  <h5 className="text-capitalize pb-2 ps-2 font-inter font-16 fw-bold">return, refunds and exchanges</h5>
                </div>
                <p className="text-capitalize text-justify font-inter font-16 ps-4 pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.</p>
              </div>
            </Col>
          </Row>
        </Container>

    
      </section>
    </>
  )
}

export default Contact