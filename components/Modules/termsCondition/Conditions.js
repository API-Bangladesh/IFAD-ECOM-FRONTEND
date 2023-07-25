import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TermsBanner from "../../../public/terms-conditions.png"
import Image from "next/image"
import axios from "axios"
import { API_BASE_URL } from "../../../utils/constants"

const Conditions=()=>{
  const [info, setInfo] = useState()
  const fetchtnc = () =>{
    try{
      axios.get(`${API_BASE_URL}/content-module/22`)
      .then((res)=>{
        // console.log(res.data[0].content_item);
        setInfo(res?.data[0]?.content_item);
        console.log(info);
      })
    }catch(err){
      console.log(err);
    }
  }

 useEffect(()=>{
  fetchtnc();
  }, [])

  return(
    <>
      <section>
        <div className="terms-banner-div">
          <Image src={TermsBanner} alt="" className="terms-banner"/>
        </div>
        <Container>
          {
            info?.map(item=>(
            <Row>
              <Col>
                <h1 className="text-capitalize text-center font-jost font-30 fw-bold py-4">{item?.item_name}</h1>
                <p className="text-justify font-16 font-poppins pb-5">
                  {item?.item_long_desc}
                </p>
              </Col>
            </Row>
            ))
          }
        </Container>
      </section>
    </>
  )
}

export default Conditions