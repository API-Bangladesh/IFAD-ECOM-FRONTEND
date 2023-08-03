import React, {Fragment, useEffect, useState} from "react";
import {useRouter} from "next/router";
import moment from "moment";
import {getStoragePath, tostify} from "../../../../utils/helpers";
import {toast} from "react-toastify";
import Button from "react-bootstrap/Button";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {SET_CART_ITEM} from "../../../../store/slices/CartSlice";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";
import Timer from "../../../../components/common/Timer";
import {fetchCombo} from "../../../../services/ComboServices";
import ComboImageSection from "../../../../components/combo/ComboImageSection";
import ComboProductDescription from "../../../../components/combo/ComboProductDescription";

const SingleComboPage = () => {
    const dispatch = useDispatch();

    const router = useRouter();
    const {id} = router.query;

    const cart = useSelector((state) => state.cart);

    const [combo, setCombo] = useState({});
    const [isRunningOffer, setIsRunningOffer] = useState(false);
    const [offerEnd, setOfferEnd] = useState(null);
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
            fetchCombo(id).then((response) => {
                if (response?.data) {
                    setCombo(response.data);

                    let myOfferStart = moment(response.data.offer_start);
                    let myOfferEnd = moment(response.data.offer_end);
                    let diff = moment.duration(myOfferEnd.diff(myOfferStart)).asDays();
                    setIsRunningOffer(diff > 0);
                    setOfferEnd(myOfferEnd);
                }
            });
        }
    }, [id]);


    const handleAddToCart = (event, combo, buyNow = false) => {
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
                combo_id: combo.id,
                quantity: quantity,
                unit_price: combo.sale_price,
                total: quantity * combo.sale_price,

                type: 'combo',
                sku: combo.sku,
                title: combo.title,
                category_name: combo?.combo_category?.name,
                image: getStoragePath(`combo-image/${combo?.image}`)
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
            <div className="product-banner">
                <img
                    src={combo?.lifestyle_image ? getStoragePath(`combo-life-style/${combo?.lifestyle_image}`) : "/combo-default.jpg"}
                    alt="image"
                    className="product-banner"
                />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="mt-5">
                            <ComboImageSection combo={combo} className="sec-height"/>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 ps-5">
                        <div className="border-bottom">
                            <h3 className="mt-5 color font-jost display-6 fw-bolder text-capitalize mb-3">
                                {combo?.title}
                            </h3>
                            <p className="font-lato font-20 text-dark mb-3">
                                {isRunningOffer ? (
                                    <Fragment>
                                        <del>
                                            Price:- {combo?.sale_price}
                                        </del>
                                        <br/>
                                        Offer Price:- {combo?.offer_price}
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        Price:- {combo?.sale_price}
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
                            <div className="ms-2">
                                <button type="button"
                                        className="btn btn-success buy-btn rounded-0 text-capitalize px-4 font-lato"
                                        onClick={(event) => handleAddToCart(event, combo, true)}
                                >
                                    buy now
                                </button>
                            </div>
                            <div className="ms-2">
                                <button
                                    type="button"
                                    className="btn btn-warning buy-btn2 rounded-0 text-capitalize px-4 font-lato"
                                    onClick={(event) => handleAddToCart(event, combo)}
                                >
                                    add to cart
                                </button>
                            </div>
                        </div>
                        {isRunningOffer && (
                            <div style={{padding: "10px 0 0", textAlign: "left", fontWeight: "bold"}}>
                                <Timer startDate={null} endDate={offerEnd}/>
                            </div>
                        )}
                    </div>

                    <ComboProductDescription combo={combo} className="mb-5 tabs"/>
                </div>
            </div>
        </section>
    );
};

export default SingleComboPage;
