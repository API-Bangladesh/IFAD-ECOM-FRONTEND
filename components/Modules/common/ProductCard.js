import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import {AiOutlineShoppingCart} from "react-icons/ai";
import moment from "moment";

const ProductCard = ({id, title, salePrice, offerPrice, offerStart, offerEnd, imagePath, viewLink, cssClasses}) => {
    return (
        <Card className={`shadow rounded-0 ${cssClasses}`}>
            <div className="combo-img-bg position-relative">
                <Link href={viewLink}>
                    <img src={imagePath} className=" card-img-top mt-4 mb-4" alt={title}/>
                </Link>
                <div className="position-absolute offer-token text-center">
                    <span className="text-white veri-align fw-semibold font-14 pt-2">-30%</span>
                </div>
            </div>
            <Card.Body>
                <Card.Title className="text-center text-capitalize font-18">
                    <a href={`/product/${id}`}>
                        {title}
                    </a>
                </Card.Title>

                <del>
                    <Card.Text className="text-center text-capitalize">
                        Price:- {salePrice}
                    </Card.Text>
                </del>
                <Card.Text className="text-center pb-3 text-capitalize">
                    offer Price:- {offerPrice}
                </Card.Text>
                <div className="d-flex justify-content-center">
                    <Link href="/checkout"
                          className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato"
                    >
                        buy now
                    </Link>
                    <button
                        type="button"
                        className="btn btn-success buy-add-btn rounded-0 text-capitalize px-2 font-14  font-lato"
                    >
                        <div className="d-flex justify-content-between text-center font-14 pe-0">
                            <AiOutlineShoppingCart className="pt-1 pe-1" size={"20px"}/>
                            <span className="fw-normal font-lato ad-card-btn">add to cart</span>
                        </div>
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
