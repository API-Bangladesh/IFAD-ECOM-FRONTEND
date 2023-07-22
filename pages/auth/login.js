import React, {useState} from 'react';
import {Col, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useRouter} from 'next/router';
import {loginCustomer} from "../../services/AuthServices";
import {login} from "../../utils/auth";
import {useDispatch} from "react-redux";
import {SET_AUTH_DATA} from "../../store/slices/AuthSlice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        loginCustomer({
            email: email,
            password: password,
            remember: remember
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
    };

    return (
        <section className="login-bg">
            <Container>
                <div className="py-5 d-flex justify-content-center">

                    <Col data-aos="fade-up" data-aos-duration="500" lg={4}
                         className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
                        <h4 className="font-30 pb-4 ps-3 font-lato fw-semibold text-capitalize">sign in</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Email address<span className="text-danger">*</span></Form.Label>
                                <Form.Control type="email" name='email' value={email}
                                              onChange={e => setEmail(e.target.value)}
                                              className="rounded-0 login-form" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                                <Form.Control type="password" name='password' value={password}
                                              onChange={e => setPassword(e.target.value)}
                                              className="rounded-0 login-form" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Check type="checkbox" label="remember me"
                                            onChange={(event) => setRemember(event.target.checked)}/>
                            </Form.Group>
                            <button type="submit"
                                    className="font-poppins btn btn-primary w-100 submit-btn rounded-0 px-5 py-2 text-capitalize">
                                sign in
                            </button>
                        </Form>
                    </Col>
                </div>
            </Container>
        </section>
    );
}
export default LoginPage