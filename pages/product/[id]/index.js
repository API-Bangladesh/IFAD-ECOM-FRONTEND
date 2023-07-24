import React, {Fragment, useEffect, useState} from "react";
import ProductBanner from "../../../public/product.png";
import Image from "next/image";
import Link from "next/link";
import {FaHeart} from "react-icons/fa";
import ImageSection from "../../../components/product/ImageSection";
import ProductDescription from "../../../components/product/ProductDescription";
import {fetchInventory} from "../../../services/InventoryServices";
import {useRouter} from "next/router";
import StarRatings from "react-star-ratings";
import moment from "moment";
import {syncWishlist, wishlistStatus} from "../../../services/WishlistServices";
import {tostify} from "../../../utils/helpers";
import {toast} from "react-toastify";
import {isLoggedIn} from "../../../utils/auth";
import Button from "react-bootstrap/Button";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {SET_CART_ITEM} from "../../../store/slices/CartSlice";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";

const SingleInventoryPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {id} = router.query;

    const cart = useSelector((state) => state.cart);

    const [inventory, setInventory] = useState({});
    const [isRunningOffer, setIsRunningOffer] = useState(false);
    const [isWishlist, setIsWishlist] = useState(false);

    const [quantity, setQuantity] = useState(0);

    const incQuantity = (event) => {
        event.preventDefault()
        setQuantity(quantity + 1);
    }

    const decQuantity = (event) => {
        event.preventDefault()

        if (quantity > 0) {
            setQuantity(sum - 1);
        } else {
            alert("sorry, Zero limit reached.")
            setQuantity(0);
        }
    }

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

    const handleAddToCart = (event, inventory) => {
        event.preventDefault();

        dispatch(SET_CART_ITEM({
            id: randomInt(11111111, 999999999),
            inventory_id: inventory.id,
            quantity: quantity,
            unit_price: inventory.unit_price,
            total: quantity * inventory.unit_price,

            product_type: 'product',
            product_title: inventory.title,
            product_category_name: inventory?.product?.category?.name,
            product_sub_category_name: inventory?.product?.sub_category?.name,
            product_image: inventory?.product_images?.[0]?.image,
            product_variations: '',
        }));

    }

    return (
        <section className="view-single-pro">
            <div className="product-banner">
                <Image src={ProductBanner} alt="" className="product-banner"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="mt-5">
                            <ImageSection inventory={inventory} className="sec-height"/>
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

                            <div
                                className="d-flex justify-content-between align-items-center border border-secondary rounded-0 counter">
                                <Button onClick={(event) => decQuantity(event)} className="button-two border-0 ms-2">
                                    <AiOutlineMinus className="text-dark minus-icon"/>
                                </Button>

                                <h2 className="px-4 font-14 count-padding">
                                    {quantity}
                                </h2>

                                <Button onClick={(event) => incQuantity(event)} className="button-one border-0 me-2">
                                    <AiOutlinePlus className="text-dark plus-icon"/>
                                </Button>
                            </div>
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
                                    onClick={(event) => handleAddToCart(event, inventory)}
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
