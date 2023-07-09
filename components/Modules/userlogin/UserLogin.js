import React, { useEffect, useState } from 'react';
import { Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { showErrorNotification, showSuccessTimerNotification } from '../helper/notificationHelper';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState("");
  const router = useRouter();

  //store token again while re-opening the browser
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleSubmit = async (e) =>{
    const BASE_URL= 'http://192.168.68.149:4444/ecom';
    e.preventDefault();
    try{
      const res = await axios.post(`${BASE_URL}/login`,{email,password})
        .then((res)=>{
          const token = res?.data?.data?.api_token;
          if(token){
            localStorage.setItem("token", JSON.stringify(token));
            showSuccessTimerNotification("Success", res.data.message);
            router.push('/');
          }else{
            showErrorNotification("Error", "Wrong Email or Password, Please try again!");
          }
        });
      setEmail('');
      setPassword('');
    }catch(err){
      console.log(err.message);
    }
  };

  return (
    <>
      <section className="login-bg">
        <Container>
          <div className="py-5 d-flex justify-content-center">

            <Col data-aos="fade-up" data-aos-duration="500" lg={4} className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
              <h4 className="font-30 pb-4 ps-3 font-lato fw-semibold text-capitalize">sign in</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Email address<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" name='email' value={email} onChange={e=> setEmail(e.target.value)}
                  className="rounded-0 login-form" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="password" name='password' value={password} onChange={e=> setPassword(e.target.value)}
                  className="rounded-0 login-form" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <button type="submit" className="font-poppins btn btn-primary w-100 submit-btn rounded-0 px-5 py-2 text-capitalize">
                  sign in
                </button>
              </Form>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}
export default UserLogin