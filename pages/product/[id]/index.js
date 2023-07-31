import React, {Fragment, useEffect, useState} from "react";
import {FaHeart} from "react-icons/fa";
import ImageSection from "../../../components/product/ImageSection";
import ProductDescription from "../../../components/product/ProductDescription";
import {
    fetchAllVariantOptionsByProduct,
    fetchInventory,
    fetchInventoryByVariationIds
} from "../../../services/InventoryServices";
import {useRouter} from "next/router";
import StarRatings from "react-star-ratings";
import moment from "moment";
import {syncWishlist, wishlistStatus} from "../../../services/WishlistServices";
import {getStoragePath, tostify} from "../../../utils/helpers";
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
    const [allVariantsOptions, setAllVariantsOptions] = useState({});
    const [inventoryVariantIds, setInventoryVariantIds] = useState([]);

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
        if (inventory?.id && isLoggedIn()) {
            wishlistStatus(inventory?.id).then((response) => {
                if (response?.data) {
                    setIsWishlist(response?.data?.favourite)
                }
            });
        }
    }, [inventory?.id]);

    useEffect(() => {
        if (inventory?.product_id) {
            fetchAllVariantOptionsByProduct(inventory?.product_id).then((response) => {
                if (response?.data) {
                    setAllVariantsOptions(response?.data);
                }
            });
        }
    }, [inventory?.product_id])

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

    const handleChangeVariantOption = (variantOptionId) => {
        setInventoryVariantIds((prevSate) => [...prevSate, variantOptionId]);
    }

    useEffect(() => {
        if (inventory?.id && inventoryVariantIds.length > 0) {
            fetchInventoryByVariationIds(inventory.id, {
                inventory_variant_ids: inventoryVariantIds
            }).then((response) => {
                if (response?.data) {
                    const {inventory_id} = response.data;
                    // console.log(inventory_id, inventory.id)
                    if (inventory_id != inventory.id) {
                        // router.push('/product/' + inventory_id);
                    }
                }
            });
        }
    }, [inventory?.id, inventoryVariantIds])

    const handleAddToCart = (event, inventory, buyNow = false) => {
        event.preventDefault();

        try {

            if (!quantity) {
                tostify(toast, 'warning', {
                    message: "Quantity should't empty!"
                });
                return false;
            }

            dispatch(SET_CART_ITEM({
                id: randomInt(11111111, 999999999),
                inventory_id: inventory.id,
                quantity: quantity,
                unit_price: inventory.sale_price,
                total: quantity * inventory.sale_price,

                type: 'product',
                sku: inventory.sku,
                title: inventory.title,
                category_name: inventory?.product?.category?.name,
                sub_category_name: inventory?.product?.sub_category?.name,
                image: inventory?.image
                    ? getStoragePath(`inventory-multi-image/${inventory?.image}`)
                    : getStoragePath(`product/${inventory?.product?.image}`),
                variations: '',
            }));

            tostify(toast, 'success', {
                message: "Added"
            });

            setQuantity(0);

            if (buyNow) {
                setTimeout(() => {
                    router.push('/checkout');
                }, 2000);
            }
        } catch (err) {
            tostify(toast, 'warning', {
                message: err.message
            });
        }
    }

    return (
        <section className="view-single-pro">
            {inventory?.product?.lifestyle_image && (
                <div className="product-banner">
                    <img src={getStoragePath(`product/${inventory?.product?.lifestyle_image}`)} alt=""
                         className="product-banner"/>
                </div>
            )}
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

                        <div className="variation-infos">
                            <table className="table table-bordered">
                                <tbody>
                                {Object.keys(allVariantsOptions).map((variantName, key) => {
                                    const variantOptions = allVariantsOptions[variantName];

                                    return (
                                        <tr key={key}>
                                            <td>{variantName}</td>
                                            <td className="d-flex">
                                                {variantOptions.map((option, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <input type="radio" className="btn-check"
                                                                   name={variantName}
                                                                   id={variantName + '-' + option.inventory_variant_id}
                                                                   value={option.inventory_variant_id}
                                                                   onClick={(event) => handleChangeVariantOption(event.target.value)}/>
                                                            <label className="btn btn-outline-secondary me-2"
                                                                   htmlFor={variantName + '-' + option.inventory_variant_id}>
                                                                {option.variant_option_name}
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
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
                                <button type="button"
                                        className="btn btn-success buy-btn rounded-0 text-capitalize px-4 font-lato"
                                        onClick={(event) => handleAddToCart(event, inventory, true)}
                                >
                                    buy now
                                </button>
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
