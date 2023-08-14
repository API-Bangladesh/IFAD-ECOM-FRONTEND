import React, {useEffect, useState} from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import parse from 'html-react-parser'
import TermsBanner from "../../public/terms-conditions.png"
import Image from "next/image"
import axios from "../../utils/axios"

const RefundPolicyPage = () => {
    const [info, setInfo] = useState([]);

    const fetchRefundInfo = () => {
        axios.get(`/content-module/23`)
            .then((res) => {
                setInfo(res?.data[0]?.content_item);
            })
    }

    useEffect(() => {
        fetchRefundInfo();
    }, [])

    return (
        <section>
            <div className="terms-banner-div">
                <Image src={TermsBanner} alt="" className="terms-banner"/>
            </div>
            <Container>
                {info?.map((item, index) => (
                    <Row className="justify-content-center" key={index}>
                        <Col xs={12} md={10} xxl={9}>
                            <h1 className="text-capitalize text-center font-jost font-30 fw-bold py-4">
                                {item.item_name}
                            </h1>
                            <p className="text-justify font-16 font-poppins pb-5">
                                {parse(item.item_long_desc)}
                            </p>
                        </Col>
                    </Row>
                ))}
            </Container>
        </section>
    )
}

export default RefundPolicyPage