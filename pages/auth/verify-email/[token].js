import React, {useEffect} from 'react';
import {verifyEmailCustomer} from "../../../services/AuthServices";
import {tostify} from "../../../utils/helpers";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {RotatingLines} from "react-loader-spinner";

const VerifyPage = () => {
    const router = useRouter();
    const {token} = router.query;

    useEffect(() => {
        if (token) {
            verifyEmailCustomer(token).then((response) => {
                if (response?.data?.message) {
                    tostify(toast, 'success', response);

                    setTimeout(() => {
                        router.replace('/my-account');
                    }, 1500);
                }
            });
        }
    }, [token]);

    return (
        <section className="login-bg">
            <div className="d-flex justify-content-center" style={{padding: "150px 0"}}>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
        </section>
    );
}

export default VerifyPage
