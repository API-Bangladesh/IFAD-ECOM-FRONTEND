import React, {useEffect, useState} from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import {Container} from "react-bootstrap";
import UserInfoTab from "../../components/my-account/UserInfoTab";
import WishlistTab from "../../components/my-account/WishlistTab";
import OrdersTab from "../../components/my-account/OrdersTab";
import ChangePasswordTab from "../../components/my-account/ChangePasswordTab";
import AddressTab from "../../components/my-account/AddressTab";
import {useRouter} from "next/router";

const MyAccountPage = () => {
    const router = useRouter();
    const {tab} = router.query;

    const [activeKey, setActiveKey] = useState('account-info');

    useEffect(() => {
        if (tab) {
            setActiveKey(tab);
        }
    }, [tab]);

    return (
        <section>
            <Container>
                <Col className="mt-5">
                    <Tab.Container id="left-tabs-example" activeKey={activeKey}>
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column float-start font-16 font-lato font-lato ">
                                    <Nav.Item>
                                        <Nav.Link eventKey="account-info" className="text-capitalize rounded-0"
                                                  onClick={() => {
                                                      router.push({
                                                          pathname: '/my-account',
                                                          query: {
                                                              'tab': 'account-info'
                                                          }
                                                      });
                                                  }}>
                                            account information
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="wishlist" className="text-capitalize rounded-0"
                                                  onClick={() => {
                                                      router.push({
                                                          pathname: '/my-account',
                                                          query: {
                                                              'tab': 'wishlist'
                                                          }
                                                      });
                                                  }}>
                                            wish list
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="order" className="text-capitalize rounded-0"
                                                  onClick={() => {
                                                      router.push({
                                                          pathname: '/my-account',
                                                          query: {
                                                              'tab': 'order'
                                                          }
                                                      });
                                                  }}>
                                            my order
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="change-password" className="text-capitalize rounded-0"
                                                  onClick={() => {
                                                      router.push({
                                                          pathname: '/my-account',
                                                          query: {
                                                              'tab': 'change-password'
                                                          }
                                                      });
                                                  }}>
                                            change password
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="address" className="text-capitalize rounded-0"
                                                  onClick={() => {
                                                      router.push({
                                                          pathname: '/my-account',
                                                          query: {
                                                              'tab': 'address'
                                                          }
                                                      });
                                                  }}>
                                            Address
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="account-info" className="text-capitalize font-16 font-lato">
                                        <UserInfoTab/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="wishlist" className="text-capitalize font-16 font-lato">
                                        <WishlistTab/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="order" className="text-capitalize font-16 font-lato">
                                        <OrdersTab/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="change-password" className="text-capitalize font-16 font-lato">
                                        <ChangePasswordTab/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="address" className="text-capitalize font-16 font-lato">
                                        <AddressTab/>
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

export default MyAccountPage;