import { makePaymentInvoice } from "../../services/OrderServices";

const InvoiceCard = ({ orderDetails }) => {
  console.log(orderDetails);
  let billing_address = orderDetails.billing_address;
  let billing_lines = billing_address?.split(",");
  let shipping_address = orderDetails.shipping_address;
  let shipping_lines = shipping_address?.split(",");

  const handlePay = (event) => {
    event.preventDefault();

    makePaymentInvoice(orderDetails.id).then((response) => {
      // console.log(response);
      if (response?.data?.GatewayPageURL) {
        // tostify(toast, 'success', response);
        // dispatch(RESET_CART());
        window.location.href = response?.data?.GatewayPageURL;
      }
    });
  };

  return (
    <div className="">
      <div className="card-body">
        <div className="container mb-5 mt-3">
          <div className="row d-flex align-items-baseline">
            <div className="col-xl-9">
              <p className="fw-bold">
                Order Date: <span>{orderDetails?.order_date}</span>
              </p>
            </div>
          </div>

          <div className="row my-2">
            <p className="fw-bold mb-2">Product Summary</p>
            {/* <div className="col-md-2 mb-4 mb-md-0">
              <div className="bg-image ripple rounded-5 mb-4 overflow-hidden d-block" data-ripple-color="light">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                  className="w-100"
                  height="100px"
                  alt="Elegant shoes and shirt"
                />
              </div>
            </div> */}
            {orderDetails?.order_items?.map((item, i) => (
              <div className="row my-2 d-flex justify-content-between">
                <div key={i} className="col-md-7 mb-4 mb-md-0">
                  {
                    item?.type == "product" ? <p className="">{item?.inventory?.title}</p> : <p className="">{item?.combo?.title}</p>
                  }
                </div>
                <div className="col-md-3 mb-4 mb-md-0">
                  <h5 className="mb-2 text-right">
                    {/* <s className="text-muted me-2 small align-middle"></s> */}
                    <span className="align-middle">
                      Price: {item?.unit_price} BDT
                    </span>
                  </h5>
                </div>
              </div>
            ))}

            <hr />
            <div className="mb-4 mb-md-0">
              <h5 className="mb-2 d-flex justify-content-end">
                <s className="text-muted me-2 small "></s>
                <span className="float-start pt-2 mx-4">
                  Sub-Total {orderDetails?.sub_total} BDT
                </span>
              </h5>
            </div>
            <hr />
          </div>
          <div className="d-flex justify-content-end mx-3">
            {orderDetails.payment_status_id == 1 ?
            <button
              className="btn btn-outline-warning rounded-1 py-1 disabled "
            >
              Paid
            </button> :
            <button
              type="button"
              className="btn btn-outline-warning rounded-1 py-1"
              onClick={(event) => handlePay(event)}
            >
              Pay now
            </button>}
          </div>

            <div className="row mb-3">
              <p className="fw-bold mb-2 mt-2">Order Summary</p>
              <div className="col-xl-6">
                <div className="payment-info my-2">
                  <h4 className="fw-bold">Payment Information</h4>
                  <p className="payment">
                    {orderDetails?.payment_method?.code}
                  </p>
                  <p className="desc">{orderDetails?.payment_method?.name}</p>
                </div>
                <hr/>
                <div className="handle-info">
                  <h4 className="fw-bold mt-2">Shipping & Handling Information</h4>
                  <p className="delivery-info">
                    Regular Delivery in 3-5 working Days.
                  </p>
                </div>
              </div>
              <div className="col-xl-6">
                <p className="fw-bold">Order Totals</p>
                <ul className="list-unstyled">
                  <li className="text-muted ms-3 d-flex justify-content-between">
                    <span className="text-black me-4">SubTotal</span>{" "}
                    <span>{orderDetails?.sub_total} BDT</span>
                  </li>
                  <li className="text-muted ms-3 d-flex justify-content-between">
                    <span className="text-black me-4">Shipping & Handling</span>{" "}
                    <span>{orderDetails?.shipping_charge} BDT</span>
                  </li>
                  <li className="text-muted ms-3 d-flex justify-content-between">
                    <span className="text-black me-4">Discount</span>{" "}
                    <span>{orderDetails?.discount} BDT</span>
                  </li>
                  <hr />
                  <li className="text-muted ms-3 d-flex justify-content-between">
                    <span className="text-black me-4">Grand Total</span>{" "}
                    <span>{orderDetails?.grand_total} BDT</span>
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            <div className="row mt-3">
              <p className="fw-bold pb-2">Address</p>
              <div className="col-xl-5 bg-light p-2 mr-20">
                <p className="ms-3 fw-bold ">Billing Address</p>
                {billing_lines?.map((line, i) => (
                  <p key={i} className="ms-3">
                    {line}
                  </p>
                ))}
              </div>
              <div className="col-xl-5 bg-light p-2">
                <p className="ms-3 fw-bold">Shipping Address</p>
                {shipping_lines?.map((line, i) => (
                  <p key={i} className="ms-3">
                    {line}
                  </p>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
