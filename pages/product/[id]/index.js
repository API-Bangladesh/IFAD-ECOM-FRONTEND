import React, {Fragment, useEffect, useState} from "react";
import ProductBanner from "../../../public/product.png";
import Image from "next/image";
import Link from "next/link";
import {FaHeart} from "react-icons/fa";
import SingDemo from "../../../components/product/SingDemo";
import Counter from "../../../components/product/Counter";
import ProductDescription from "../../../components/product/ProductDescription";
import {fetchInventory} from "../../../services/InventoryServices";
import {useRouter} from "next/router";
import StarRatings from "react-star-ratings";
import moment from "moment";
import {saveWishlist, syncWishlist, wishlistStatus} from "../../../services/WishlistServices";
import {tostify} from "../../../utils/helpers";
import {toast} from "react-toastify";
import {isLoggedIn} from "../../../utils/auth";

const SingleInventoryPage = () => {
    const router = useRouter();
    const {id} = router.query;

    const [inventory, setInventory] = useState({});
    const [isRunningOffer, setIsRunningOffer] = useState(false);
    const [isWishlist, setIsWishlist] = useState(false);

    useEffect(() => {
        if (id) {
            fetchInventory(id).then((response) => {
                if (response?.data) {
                    setInventory(response.data);

                    let myOfferStart = moment(response.data.offer_start);
                    let myOfferEnd = moment(response.data.offer_end);
                    let diff = moment.duration(myOfferEnd.diff(myOfferStart)).asDays();
                    setIsRunningOffer(diff > 0);
                }
            });
        }
    }, [id]);

    useEffect(() => {
        if (inventory?.id) {
            wishlistStatus(inventory?.id).then((response) => {
                if (response?.data) {
                    setIsWishlist(response?.data?.favourite)
                }
            });
        }
    }, [inventory?.id])

    const handleFavourite = () => {
        syncWishlist({
            inventory_id: inventory?.id
        }).then((response) => {
            if (response?.data) {
                tostify(toast, 'success', response);

                if (response?.data?.data) {
                    setIsWishlist(response?.data?.data?.favourite)
                }
            }
        });
    };

    return (
        <section className="view-single-pro">
            <div className="product-banner">
                <Image src={ProductBanner} alt="" className="product-banner"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="mt-5">
                            <SingDemo className="sec-height"/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 ps-5">
                        <div className="border-bottom">
                            <h3 className="mt-5 color font-jost display-6 fw-bolder text-capitalize">
                                {inventory?.title}
                            </h3>
                            <div className="d-flex justify-content-start align-items-center mb-3 mt-2">
                                <StarRatings
                                    rating={parseInt(inventory?.star_ratting || 0)}
                                    starRatedColor="orange"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <p className="text-secondary ps-2 fw-bold">
                                    ( {inventory?.reviews_count} review )
                                </p>
                            </div>
                            <p className="font-lato font-20 text-dark mb-3">
                                {isRunningOffer ? (
                                    <Fragment>
                                        <del>
                                            Price:- {inventory?.sale_price}
                                        </del>
                                        <br/>
                                        Offer Price:- {inventory?.offer_price}
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        Price:- {inventory?.sale_price}
                                    </Fragment>
                                )}
                            </p>
                        </div>
                        <div className="d-flex justify-content-start align-items-center counter mt-3">
                            <p className="text-capitalize pe-3 font-lato">quantity :</p>
                            <Counter/>
                        </div>
                        <div className="d-flex justify-content-start counter mt-4 mb-4">
                            {isLoggedIn() && (
                                <div className="border border-success px-2">
                                    <FaHeart
                                        className={`mt-1 cursor-pointer favourite-icon ${isWishlist ? 'favourite-icon-onclick' : 'favourite-icon'}`}
                                        onClick={(event) => handleFavourite(event)}
                                    />
                                </div>
                            )}
                            <div className="ms-2">
                                <Link href="/payments/Payments"
                                      type="button"
                                      className="btn btn-success buy-btn rounded-0 text-capitalize px-4 font-lato"
                                >
                                    buy now
                                </Link>
                            </div>
                            <div className="ms-2">
                                <button
                                    type="button"
                                    className="btn btn-warning buy-btn2 rounded-0 text-capitalize px-4 font-lato"
                                >
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <ProductDescription inventory={inventory} className="mb-5 tabs"/>
                </div>
            </div>
        </section>
    );
};

export default SingleInventoryPage;
