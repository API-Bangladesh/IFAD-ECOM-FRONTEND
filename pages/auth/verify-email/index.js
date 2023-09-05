import React, {useState} from 'react';
import {Col, Container} from "react-bootstrap";
import {verificationNotificationCustomer} from "../../../services/AuthServices";
import {tostify} from "../../../utils/helpers";
import {toast} from "react-toastify";

const VerificationNotificationPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        verificationNotificationCustomer().then((response) => {
            if (response?.data?.message) {
                tostify(toast, 'success', response);
                setIsLoading(false);
            }
        });
    };

    return (
        <section className="login-bg">
            <Container>
                <div className="py-5 d-flex justify-content-center">
                    <Col data-aos="fade-up" data-aos-duration="500" lg={4}
                         className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
                        <h4 className="font-30 pb-4 font-lato fw-semibold text-capitalize">Verify Email</h4>
                        <p className="mb-4">
                            Please check your email and click on the verification link button. If you haven't received
                            the email, please click "Resend Verification Link."
                        </p>

                        <button type="button"
                                className="font-poppins btn btn-warning submit-btn w-100 rounded-0 px-5 py-2 text-capitalize"
                                onClick={(event) => handleSubmit(event)}
                                disabled={isLoading}>
                            Resend Verification Link
                        </button>
                    </Col>
                </div>
            </Container>
        </section>
    );
}

export default VerificationNotificationPage