import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TermsBanner from "../../../public/terms-conditions.png"
import Image from "next/image"

const Conditions=()=>{
  return(
    <>
      <section>
        <div className="terms-banner-div">
          <Image src={TermsBanner} alt="" className="terms-banner"/>
        </div>
        <Container>
          <Row>
            <Col>
              <h1 className="text-capitalize text-center font-jost font-30 fw-bold py-4">terms and conditions</h1>
              <p className="text-justify font-16 font-poppins pb-5">Lorem ipsum dolor sit amet consectetur 
              adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.The 
              passage experienced a surge in popularity during the 1960&apos;s when Letraset used it on their dry-transfer 
              sheets and again during the 90&apos;s as desktop publishers bundled the text with their software. Today it&apos;s 
              seen all around the web&apos; on templates websites and stock designs. Use our generator to get your own or 
              read on for the authoritative history of lorem ipsum.Lorem ipsum dolor sit amet consectetur 
              adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.The 
              passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer 
              sheets and again during the 90s as desktop publishers bundled the text with their software. Today it&apos;s 
              seen all around the web on templates websites and stock designs. Use our generator to get your own or 
              read on for the authoritative history of lorem ipsum.Lorem ipsum dolor sit amet consectetur 
              adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.The 
              passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer 
              sheets and again during the 90&apos;s as desktop publishers bundled the text with their software. Today it&apos;s 
              seen all around the web on templates websites and stock designs. Use our generator to get your own or 
              read on for the authoritative history of lorem ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Conditions