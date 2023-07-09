import React from "react"
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link"

const SectionTitle = ({title}) => {
  return (
    <>
       <section className="conbo-pack">
        <div className="container border-bottom p-0">
          <div className="header-title mt-4 mb-3 position-relative">
            <h1 className="text-center font-24 text-capitalize font-inter py-3">{title}</h1>
            <Link href="#" >
              <div className="d-flex justify-content-center combo-btn bg-white px-3 py-2 position-absolute">
                <p className=" font-16 fw-semibold">View all</p>
                <BsArrowRight className="arrow ms-2"/> 
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionTitle