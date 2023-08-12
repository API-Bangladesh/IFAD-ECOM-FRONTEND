import React, {useState} from 'react';
import Link from 'next/link';
import Button from "react-bootstrap/Button";
import {Col, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {useRouter} from 'next/router';
import {BACKEND_URL} from "../../utils/constants";
import {tostify} from "../../utils/helpers";
import {toast} from "react-toastify";
import {registerCustomer} from "../../services/AuthServices";
import {SET_AUTH_DATA} from "../../store/slices/AuthSlice";
import {login} from "../../utils/auth";
import {useDispatch} from "react-redux";

function RegisterPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        registerCustomer({
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            agree: agree,
        }, setErrors).then((response) => {
            if (response?.data?.data) {
                const {customer, token} = response.data.data;

                if (customer) {
                    dispatch(SET_AUTH_DATA(customer));
                }

                if (token) {
                    login(token);
                }
            }
        });
    }

    return (
        <section className="login-bg">
            <Container>
                <div className="py-5 d-flex justify-content-center">

                    <Col data-aos="fade-up" data-aos-duration="500" lg={4}
                         className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
                        <h4 className="font-30 pb-4 ps-3 font-lato fw-semibold text-capitalize">sign up</h4>
                        <Form className="px-3" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Name<span className="text-danger"> *</span></Form.Label>
                                <Form.Control type="text" name='name' value={name}
                                              onChange={e => setName(e.target.value)}
                                              className="rounded-0 login-form" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Email address<span className="text-danger"> *</span></Form.Label>
                                <Form.Control type="email" name='email' value={email}
                                              onChange={e => setEmail(e.target.value)}
                                              className="rounded-0 login-form" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Password<span className="text-danger"> *</span></Form.Label>
                                <Form.Control type="password" name='password' value={password}
                                              onChange={e => setPassword(e.target.value)}
                                              className="rounded-0 login-form" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Confirm Password<span className="text-danger"> *</span></Form.Label>
                                <Form.Control type="password" name='confirmPassword' value={confirmPassword}
                                              onChange={e => setConfirmPassword(e.target.value)}
                                              className="rounded-0 login-form" required/>
                            </Form.Group>
                            <Form.Group className="mb-3 text-secondary" controlId="">
                            <Form.Check type="checkbox" label="agree all terms & conditions"
                                            onChange={(event) => setAgree(event.target.checked)}/>
                            </Form.Group>

                            <Button type="submit"
                                    className="btn btn-primary w-100 submit-btn rounded-0 px-5 py-2 text-capitalize font-poppins">
                                register
                            </Button>

                            <div className="pt-3 d-flex justify-content-center auth-bottom-link">
                                <span>Already have an account?</span>
                                <Link href="/auth/login">
                                    Login
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </div>
            </Container>
        </section>
    );
}

export default RegisterPage