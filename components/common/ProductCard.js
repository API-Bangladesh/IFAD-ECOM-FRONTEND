import React, {Fragment} from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import moment from "moment";
import {tostify} from "../../utils/helpers";
import {toast} from "react-toastify";
import {SET_CART_ITEM} from "../../store/slices/CartSlice";
import {randomInt} from "next/dist/shared/lib/bloom-filter/utils";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import Timer from "../common/Timer";

const ProductCard = ({id, title, salePrice, offerPrice, offerStart, offerEnd, sku, categoryName, subCategoryName, imagePath, viewLink, cssClasses, isTimer}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    let myOfferStart = moment(offerStart)
    let myOfferEnd = moment(offerEnd)
    let isRunningOffer = moment.duration(myOfferEnd.diff(myOfferStart)).asDays() > 0;
    let hasOffer = offerPrice !== null;

    const handleAddToCart = (event, buyNow = false) => {
        event.preventDefault();

        try {
            dispatch(SET_CART_ITEM({
                id: randomInt(11111111, 999999999),
                inventory_id: id,
                quantity: 1,
                unit_price: salePrice,
                total: salePrice,

                type: 'product',
                sku: sku,
                title: title,
                category_name: categoryName,
                sub_category_name: subCategoryName,
                image: imagePath,
                variations: '',
            }));

            tostify(toast, 'success', {
                message: "Added"
            });

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

    const calculateDiscount = (sale, offer) => {
        return Math.round(((sale - offer) / sale) * 100);
    }

    return (
        <Card className={`c-shadow rounded-0 ${cssClasses}`}>
            <div className="combo-img-bg position-relative">
                <Link href={viewLink}>
                    <img src={imagePath} width={224} height={172} className="card-img-top mt-4 mb-4" alt={title}/>
                </Link>
                {salePrice && offerPrice && salePrice > offerPrice ?
                    (<div className="position-absolute offer-token text-center">
                        <span className="text-white veri-align fw-semibold font-14 pt-2">-{calculateDiscount(salePrice, offerPrice)}%</span>
                    </div>) : ""
                }
            </div>
            <Card.Body className="prod-card-body">
                <Card.Title className="text-center text-capitalize font-18">
                    <Link href={`/product/${id}`} className="prod-title" title={title}>
                        {title}
                    </Link>
                </Card.Title>

                {hasOffer ? (
                    <Fragment>
                        <del>
                            <Card.Text className="text-center text-capitalize">
                                Price:- <span className="currency">&#2547;</span>{salePrice}
                            </Card.Text>
                        </del>
                        <Card.Text className="text-center pb-3 text-capitalize">
                            offer Price:- <span className="currency">&#2547;</span>{offerPrice}
                        </Card.Text>
                    </Fragment>
                ) : (
                    <Card.Text className="text-center pb-3 text-capitalize">
                        <br/>
                        Price:- <span className="currency">&#2547;</span>{salePrice}
                    </Card.Text>
                )}

                <div className="d-flex justify-content-center">
                    <button type="button"
                            className="btn btn-success buy-now rounded-0 text-capitalize px-2 font-14 me-2 font-lato me-2"
                            onClick={(event) => handleAddToCart(event, true)}
                    >
                        buy now
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning buy-add-btn rounded-0 text-capitalize px-2 font-14 font-lato"
                        onClick={(event) => handleAddToCart(event)}
                    >
                        add to cart
                    </button>
                </div>
                {/* {isTimer && isRunningOffer && (
                    <div style={{padding: "10px 0 0", textAlign: "center", fontWeight: "bold"}}>
                        <Timer startDate={offerStart} endDate={offerEnd} />
                    </div>
                )} */}
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
