import React, {useEffect, useState} from "react"
import PrivacyBanner from "../../public/privacy-policy.jpg"
import Image from "next/image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup";
import parse from 'html-react-parser'
import {LongInfoPrivacy} from "../../components/privacy-policy/LongInfoPrivacy";
import {fetchPrivacyPolicy} from "../../services/CommonServices";

const PrivacyPolicyPage = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        fetchPrivacyPolicy().then((res) => {
            setInfo(res?.data[0]?.content_item);
        });
    }, []);

    return (
        <section>
            <div className="terms-banner-div">
                <Image src={PrivacyBanner} alt="" className="terms-banner"/>
            </div>
            <Container>
                {
                    info?.map((item) => (
                        <>
                            <h1 className="text-capitalize text-center font-jost font-30 fw-bold py-4">{item.item_name}</h1>
                            <Row>
                                <Col>
                                    <ListGroup as="ol" className="pb-5" numbered>
                                        {parse(item?.item_long_desc)}
                                        {/* <LongInfoPrivacy info={item.item_long_desc}/> */}
                                    </ListGroup>
                                </Col>
                            </Row>
                        </>
                    ))
                }
            </Container>
        </section>
    )
}

export default PrivacyPolicyPage