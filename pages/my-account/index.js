import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import {Container} from "react-bootstrap";

import UserInfoSection from "../../components/profile/UserInfoSection";
import Wishlist from "../../components/profile/Wishlist";
import Orders from "../../components/profile/Orders";
import ChangePassword from "../../components/profile/ChangePassword";
import ChangeBilling from "../../components/profile/ChangeBilling";

const myAccountPage = () => {
    return (
        <section>
            <Container>
                <Col className="mt-5">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column float-start font-16 font-lato font-lato ">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="text-capitalize rounded-0">
                                            account information
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="text-capitalize rounded-0">
                                            wish list
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three" className="text-capitalize rounded-0">
                                            my order
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four" className="text-capitalize rounded-0">
                                            change password
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five" className="text-capitalize rounded-0">
                                            change billing
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" className="text-capitalize font-16 font-lato">
                                        <UserInfoSection/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="text-capitalize font-16 font-lato">
                                        <Wishlist/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three" className="text-capitalize font-16 font-lato">
                                        <Orders/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four" className="text-capitalize font-16 font-lato">
                                        <ChangePassword/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five" className="text-capitalize font-16 font-lato">
                                        <ChangeBilling/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Container>
        </section>
    )
}

export default myAccountPage;