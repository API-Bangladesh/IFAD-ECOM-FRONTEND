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

const ProductCard = ({id, title, salePrice, offerPrice, offerStart, offerEnd, sku, categoryName, subCategoryName, imagePath, viewLink, cssClasses}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    let myOfferStart = moment(offerStart)
    let myOfferEnd = moment(offerEnd)
    let isRunningOffer = moment.duration(myOfferEnd.diff(myOfferStart)).asDays() > 0;

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

                {isRunningOffer ? (
                    <Fragment>
                        <del>
                            <Card.Text className="text-center text-capitalize">
                                Price:- {salePrice}
                            </Card.Text>
                        </del>
                        <Card.Text className="text-center pb-3 text-capitalize">
                            offer Price:- {offerPrice}
                        </Card.Text>
                    </Fragment>
                ) : (
                    <Card.Text className="text-center pb-3 text-capitalize">
                        <br/>
                        Price:- {salePrice}
                    </Card.Text>
                )}

                <div className="d-flex justify-content-center">
                    <button type="button"
                            className="btn btn-success buy-btn rounded-0 text-capitalize px-4 font-lato me-2"
                            onClick={(event) => handleAddToCart(event, true)}
                    >
                        buy now
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning buy-btn2 rounded-0 text-capitalize px-4 font-lato"
                        onClick={(event) => handleAddToCart(event)}
                    >
                        add to cart
                    </button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
