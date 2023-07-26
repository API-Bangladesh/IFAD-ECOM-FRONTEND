import React, {useEffect, useState} from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "next/image"
import DeliveryBanner from "../../public/delivery.jpg"
import axios from "axios"
import {API_BASE_URL} from "../../utils/constants"
import {LongInfo} from "../../components/delivery-information/LongInfo";

const DeliverInformationPage = () => {
    const [info, setInfo] = useState();

    const fetchDeliveryInfo = () => {
        try {
            axios.get(`${API_BASE_URL}/content-module/25`)
                .then((res) => {
                    setInfo(res?.data[0]?.content_item);
                })
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDeliveryInfo();
    }, [])

    return (
        <section>
            <div className="terms-banner-div">
                <Image src={DeliveryBanner} alt="" className="terms-banner"/>
            </div>
            <Container>
                {
                    info?.map((item) => (
                        <>
                            <div className="text-center d-">
                                <h2 className="text-capitalize pt-5 font-40 font-jost fw-bold delivery-title">{item?.item_name}</h2>
                                <div className=" d-flex justify-content-center ">
                                    <p className="text-capitalize font-16 font-inter delivery-para pb-5">{item?.item_short_desc}</p>
                                </div>
                            </div>
                            <Row>
                                <Col lg={10} className="delivery-details">
                                    <LongInfo info={item?.item_long_desc}/>
                                </Col>
                            </Row>
                        </>
                    ))
                }
            </Container>
        </section>
    )
}

export default DeliverInformationPage