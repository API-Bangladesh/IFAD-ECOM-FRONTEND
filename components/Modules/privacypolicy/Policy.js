import React from "react"
import PrivacyBanner from "../../../public/privacy-policy.jpg"
import Image from "next/image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup";

const Policy = () => {
  return (
    <>
      <section>
        <div className="terms-banner-div">
          <Image src={PrivacyBanner} alt="" className="terms-banner"/>
        </div>
        <Container>
            <h1 className="text-capitalize text-center font-jost font-30 fw-bold py-4">privacy policy</h1>
          <Row>
            <Col>
              <ListGroup as="ol" className="pb-5" numbered>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start border-0"
                >
                  <div className="ms-2 me-auto">
                    <div>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad 
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
                </ListGroup.Item>
              
              </ListGroup> 
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Policy