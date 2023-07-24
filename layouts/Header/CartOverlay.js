import {Fragment, useState} from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {IoMdCart} from "react-icons/io";
import {RxCross1} from "react-icons/rx";
import Image from "next/image";
import TableImg from "../../public/products/product1.png";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {withRedux} from "../../utils/HOC/withRedux";
import {REMOVE_CART_ITEM} from "../../store/slices/CartSlice";
import {tostify} from "../../utils/helpers";
import {toast} from "react-toastify";

function CartOverlay() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemoveFromCart = (event, key) => {
        event.preventDefault();

        try {
            dispatch(REMOVE_CART_ITEM(key));

            tostify(toast, 'success', {
                message: "Removed"
            });
        } catch (error) {
            tostify(toast, 'error', {
                message: error.message
            });
        }
    }

    return (
        <Fragment>
            <Button onClick={handleShow} className="me-2 off-canvas">
                <IoMdCart className="off-canvas-icon"/>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-uppercase text-secondary">items</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="pb-4 border-bottom canvas-height">
                        {cart.items.map((item, key) => (
                            <div className="d-flex justify-content-between align-items-center mb-2 item-div py-2 mx-1"
                                 key={key}>
                                <div className="d-flex justify-content-start">
                                    <div className="ms-2">
                                        <Image src={TableImg} alt="" className="product-item-one"/>
                                    </div>
                                    <div className="">
                                        <p className="text-capitalize font-16 font-lato ps-3">
                                            <a href={`/product/${item.inventory_id}`}>
                                                {item.product_title}
                                            </a>
                                        </p>
                                        <p className="text-capitalize font-16 font-lato ps-3">
                                            {item.quantity}&nbsp;&nbsp;x&nbsp;&nbsp;{item.unit_price}&nbsp;&nbsp;=&nbsp;&nbsp;{item.total}
                                        </p>
                                    </div>
                                </div>
                                <div className="me-3">
                                    <button onClick={(event) => handleRemoveFromCart(event, key)}>
                                        <RxCross1/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout justify-content-center">
                        <div className=" mt-3 position-relative">
                            <h1 className="text-capitalize font-lato font-20 fw-bold text-center">
                                sub-total : {cart.subTotal}
                            </h1>
                            <p className="text-capitalize font-lato font-20 fw-bold text-center">
                                total : {cart.subTotal}
                            </p>
                        </div>
                        <div className="mt-3 check-button d-flex justify-content-center">
                            <Link
                                href="/checkout"
                                className=" text-uppercase font-16 font-lato checkout-btn"
                            >
                                checkout
                            </Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    );
}

export default withRedux(CartOverlay);
