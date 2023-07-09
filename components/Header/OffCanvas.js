import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoMdCart } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import TableImg from "../../public/products/product1.png";
import Link from "next/link";

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="me-2 off-canvas">
        <IoMdCart className="off-canvas-icon" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-uppercase text-secondary">items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="pb-4 border-bottom canvas-height">
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1">
              <div className="d-flex justify-content-start">
                <div className="ms-2">
                  <Image src={TableImg} alt="" className="product-item-one" />
                </div>
                <div className="">
                  <p className="text-capitalize font-16 font-lato ps-3">
                    pillow chips
                  </p>
                  <p className="text-capitalize font-14 font-lato ps-3">
                    TK : 200/-
                  </p>
                </div>
              </div>
              <div className="me-3">
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
          </div>
          <div className="checkout justify-content-center">
            <div className=" mt-3 position-relative">
              <h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                sub-total : 1000
              </h1>
              <p className="text-capitalize font-lato font-20 fw-bold text-center">
                total : 1000
              </p>
            </div>
            <div className="mt-3 check-button d-flex justify-content-center">
              <Link
                href="/payments/Payments"
                className=" text-uppercase font-16 font-lato checkout-btn"
              >
                checkout
              </Link>
             
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvas() {
  return (
    <>
      <OffCanvasExample placement="end" />
    </>
  );
}

export default OffCanvas;
