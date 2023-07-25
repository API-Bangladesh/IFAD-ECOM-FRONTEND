import React, { useEffect, useState } from "react"
import PrivacyBanner from "../../../public/privacy-policy.jpg"
import Image from "next/image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios"
import { API_BASE_URL } from "../../../utils/constants"
import { LongInfoPrivacy } from "./LongInfoPrivacy"

const Policy = () => {
  const [info, setInfo] = useState();

  const fetchPrivacyInfo = () =>{
    try{
      axios.get(`${API_BASE_URL}/content-module/24`)
      .then((res)=>{
        // console.log(res.data[0].content_item); 
        setInfo(res?.data[0]?.content_item);
        console.log(info) 
      })
    }catch(err){
      console.log(err);
    }
  }

 useEffect(()=>{
  // console.log(info)
  fetchPrivacyInfo();
  }, [])

  return (
    <>
      <section>
        <div className="terms-banner-div">
          <Image src={PrivacyBanner} alt="" className="terms-banner"/>
        </div>
        <Container>
        {
          info?.map((item)=>(
            <>
            <h1 className="text-capitalize text-center font-jost font-30 fw-bold py-4">{item.item_name}</h1>
            <Row>
              <Col>
                <ListGroup as="ol" className="pb-5" numbered>
                 <LongInfoPrivacy info={item.item_long_desc}/>
                </ListGroup> 
              </Col>
            </Row>
            </>
          ))
        }
        </Container>
      </section>
    </>
  )
}

export default Policy