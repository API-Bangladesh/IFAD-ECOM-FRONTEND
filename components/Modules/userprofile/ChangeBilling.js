import React from "react"
import Button from "react-bootstrap/Button";

const ChangeBilling = () => {
  return (
    <>
      <div>
        <h1 className="text-capitalize font-32 fw-bolder font-jost pb-4 ">Payments & payouts</h1>
        <p className="text-capitalize font-16 font-inter text-justify pb-4 ">
          When you receive a payment for a order we call that payment to you a payout. Our 
          secure payment system supports several payout methods which can be set up below. 
          Go to FAQ. <br></br><br></br>

          To get paid you need to set up a payout method releases payouts about 24 hours after 
          a guest’s scheduled time. The time it takes for the funds to appear in your account 
          depends on your payout method.
        </p>
        <Button variant="primary" className="text-capitalize font-18 px-5 mb-4 user-sub-btn rounded-0 font-lato">add payment method</Button>{" "}

      </div>
    </>
  )
}

export default ChangeBilling