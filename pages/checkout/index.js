import React, {Fragment, useEffect, useState} from 'react'
import ScrollToTopButton from '../../components/common/ScrollToTopButton'
import Image from "next/image";
import Payment from "../../public/payment.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "../../public/card.jpg";
import BankTransfer from "../../public/bank-transfer.png";
import Mobile from "../../public/mobile.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchAddresses,
    updateDefaultBillingAddress,
    updateDefaultShippingAddress
} from "../../services/AddressServices";
import {getAddressToString, tostify} from "../../utils/helpers";
import {toast} from "react-toastify";
import {saveOrder} from "../../services/OrderServices";
import {fetchPaymentMethods} from "../../services/PaymentMethodServices";
import {
    RESET_CART,
    UPDATE_BILLING_ADDRESS,
    UPDATE_PAYMENT_METHOD_ID,
    UPDATE_SHIPPING_ADDRESS
} from "../../store/slices/CartSlice";
import {router} from "next/client";

const Checkout = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [addresses, setAddresses] = useState([]);
    const [billingAddress, setBillingAddress] = useState({});
    const [shippingAddress, setShippingAddress] = useState({});
    const [paymentMethods, setPaymentMethods] = useState([]);

    useEffect(() => {
        fetchPaymentMethods().then((response) => {
            if (response?.data) {
                setPaymentMethods(response.data);
            }
        });
    }, []);

    const fetchAddressesData = () => {
        fetchAddresses().then((response) => {
            if (response?.data) {
                setAddresses(response.data);
            }
        });
    }

    useEffect(() => {
        fetchAddressesData();
    }, []);

    useEffect(() => {
        if (addresses.length > 0) {
            addresses.map((address) => {
                if (address.is_default_billing) {
                    setBillingAddress(address);
                    dispatch(UPDATE_BILLING_ADDRESS(address));
                }
                if (address.is_default_shipping) {
                    setShippingAddress(address);
                    dispatch(UPDATE_SHIPPING_ADDRESS(address));
                }
            })
        }
    }, [addresses]);

    const handleSetDefaultBillingAddress = (event, id) => {
        event.preventDefault();

        updateDefaultBillingAddress(id).then((response) => {
            if (response.status) {
                tostify(toast, 'success', response);
                fetchAddressesData();
            }
        });
    }

    const handleSetDefaultShippingAddress = (event, id) => {
        event.preventDefault();

        updateDefaultShippingAddress(id).then((response) => {
            if (response.status) {
                tostify(toast, 'success', response);
                fetchAddressesData();
            }
        });
    }

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        saveOrder({
            shipping_address: getAddressToString(cart.shippingAddress),
            billing_address: getAddressToString(cart.billingAddress),
            cart: cart.items,
            sub_total: cart.subTotal,
            discount: cart.discount,
            shipping_charge: cart.shippingCharge,
            tax: cart.tax,
            grand_total: cart.grandTotal,
            payment_method_id: cart.paymentMethodId
        }).then((response) => {
            if (response?.data?.status) {
                tostify(toast, 'success', response);
                dispatch(RESET_CART());
                setTimeout(() => {
                    router.push('/my-account');
                }, 2500);
            }
        });
    }

    const handlePaymentMethodId = (id) => {
        try {
            dispatch(UPDATE_PAYMENT_METHOD_ID(id));
            console.log('Selected')
        } catch (err) {
            tostify(toast, 'success', {
                message: err.message
            });
        }
    }

    return (
        <Fragment>
            <section className=" ">
                <div className="position-relative mn">
                    <Image src={Payment} alt="" className="img-fluid payment"/>
                    <h1 className="pay-banner-text text-light text-uppercase font-48 fw-bold">payment</h1>
                </div>
                <Container>
                    <Row>
                        <Col lg={8} md={8} className=" mt-4">
                            <div className="row">
                                <div className="col-8">
                                    <h1 className="text-uppercase font-24 fw-bold mb-3">
                                        BILLING DETAILS
                                    </h1>
                                </div>
                                <div className="col-4 text-end">
                                    <select className="form-select" value={billingAddress.id}
                                            onChange={(event) => handleSetDefaultBillingAddress(event, event.target.value)}>
                                        <option value="" selected>Default Billing</option>
                                        {addresses.map((address, key) => (
                                            <option key={key} value={address.id}>{address.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <Row>
                                <Col lg={12} md={12} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Full Name
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Address Line 1
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress.address_line_1}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Address Line 2
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress.address_line_2}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Division
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress?.division?.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            District
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress?.district?.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Upozila
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress?.upazila?.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Postcode
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress.postcode}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Phone
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress.phone}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label className="font-lato">
                                            Email Address
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="" className="rounded-0 form-deco"
                                                      value={billingAddress.email}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-8">
                                    <h1 className="text-uppercase font-24 fw-bold mb-3">
                                        SHIPPING DETAILS
                                    </h1>
                                </div>
                                <div className="col-4 text-end">
                                    <select className="form-select" value={shippingAddress.id}
                                            onChange={(event) => handleSetDefaultShippingAddress(event, event.target.value)}>
                                        <option value="" selected>Default Shipping</option>
                                        {addresses.map((address, key) => (
                                            <option key={key} value={address.id}>{address.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <Row>
                                <Col lg={12} md={12} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Full Name
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Address Line 1
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress.address_line_1}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={6} md={6} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Address Line 2
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress.address_line_2}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Division
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress?.division?.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            District
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress?.district?.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Upozila
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress?.upazila?.name}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Postcode
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress.postcode}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>
                                            Phone
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress.phone}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                                <Col lg={4} md={4} className="">
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label className="font-lato">
                                            Email Address
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="" className="rounded-0 form-deco"
                                                      value={shippingAddress.email}
                                                      readOnly={true}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <br/>
                            <br/>
                            <h1 className="text-uppercase font-24 fw-bold mb-3">NOTE</h1>
                            <textarea className="form-control" rows={5} placeholder="Write some note here.."/>
                            <br/>
                            <br/>
                        </Col>
                        <Col lg={4} md={4} className=" my-4">
                            <div className="payment-card p-3">
                                <h2 className="text-uppercase font-24 fw-bold ps-2">your order</h2>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col" className="text-end">
                                            Total
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cart.items.map((item, key) => (
                                        <tr>
                                            <th scope="row" className="fw-normal text-capitalize font-16 ">
                                                <a href={`/product/${item.inventory_id}`}>
                                                    {item.product_title}
                                                </a>
                                            </th>
                                            <td className="text-end">
                                                {item.quantity}
                                                &nbsp;x
                                                &nbsp;{item.unit_price}
                                                &nbsp;=
                                                &nbsp;{item.total} Tk
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className="">
                                    <div className="d-flex justify-content-center">
                                        <p className="font-lato text-capitalize font-20 pe-2">subtotal :- </p>
                                        <p className=" font-20 ">{cart.subTotal} Tk</p>
                                    </div>
                                    {/*<div className="d-flex justify-content-center">
                                        <p className="font-lato text-capitalize font-20 pe-2">shipping charge :- </p>
                                        <p className=" font-20 ">{cart.shippingCharge} Tk</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="font-lato text-capitalize font-20 pe-2">discount :- </p>
                                        <p className=" font-20 ">{cart.discount} Tk</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="font-lato text-capitalize font-20 pe-2">tax :- </p>
                                        <p className=" font-20 ">{cart.tax} Tk</p>
                                    </div>*/}
                                    <div className="d-flex justify-content-center">
                                        <p className="font-lato text-warning text-capitalize font-20 pe-2">total :- </p>
                                        <p className="font-20 theme-text">{cart.total || 0} Tk</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {paymentMethods.map((paymentMethod, key) => (
                                        <div className="form-check form-check-inline" key={key}>
                                            <input className="form-check-input" type="radio" name="paymentMethod"
                                                   value={paymentMethod.id}
                                                   onChange={(event) => handlePaymentMethodId(event.target.value)}/>
                                            <label className="form-check-label text-capitalize" htmlFor="inlineRadio1">
                                                {paymentMethod.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="">
                                    <button type="button"
                                            className="text-capitalize font-16 w-100 place-order mt-4 font-lato fw-bold theme-text"
                                            onClick={(event) => handlePlaceOrder(event)}>
                                        place order
                                    </button>
                                </div>
                            </div>

                            <div className="">
                                <p className="text-capitalize py-3 font-16">online payment by SSLCommerz :</p>
                                <div className="row">
                                    <Col lg={4} md={6} className="mb-3">
                                        <p className="text-capitalize text-center pb-2">card</p>
                                        <Image src={Card} alt="card" className=" card-payment rounded-1 shadow"/>
                                    </Col>
                                    <Col lg={4} md={6} className="mb-3">
                                        <p className="text-capitalize text-center pb-2">bank transfer</p>
                                        <Image src={BankTransfer} alt="card"
                                               className=" transfer-payment rounded-1 shadow"/>
                                    </Col>
                                    <Col lg={4} md={8} className="mb-3">
                                        <p className="text-capitalize text-center pb-2">mobile banking</p>
                                        <Image src={Mobile} alt="card" className=" card-payment rounded-1 shadow"/>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <ScrollToTopButton/>
        </Fragment>
    )
}

export default Checkout