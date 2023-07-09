import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { useRouter } from 'next/router';
import { showErrorNotification, showSuccessTimerNotification } from '../helper/notificationHelper';

function UserRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter();
  
  const handleSubmit = async (e) =>{
    const BASE_URL= 'http://192.168.68.149:4444/ecom';
    e.preventDefault();
    try{
      if (password !== confirmPassword) {
        setError('Passwords do not match!!!');
      } else {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (password.length < 8) {
          setError("Password should have a minimum length of 8 characters.");
          return;
        } else if (!passwordRegex.test(password)) {
          setError("Password should contain at least one uppercase letter, one lowercase letter, and one digit.");
          return;
        } else {
          setError('');
          setName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          const res = await axios.post(`${BASE_URL}/register`,{name,email,password})
          .then((res)=>{
            if(res.status === 200){
              showSuccessTimerNotification("Success", res.data.message);
              router.push('/login/Login');
            } else{
              showErrorNotification("Error!", res.data.message);
            }
            console.log(res);
          });
        }
        console.log(`Name: ${name}, Email: ${email}`);
      }
    } catch (err){
      console.log(err.message);
    }
  };  

  return (
    <>
       <section className="login-bg">
        <Container>
          <div className="py-5 d-flex justify-content-center">

            <Col data-aos="fade-up" data-aos-duration="500" lg={4} className="login-form-center shadow px-4 py-5 rounded-1 bg-white">
              <h4 className="font-30 pb-4 ps-3 font-lato fw-semibold text-capitalize">sign up</h4>
            <Form className="px-3" onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name<span className="text-danger"> *</span></Form.Label>
              <Form.Control type="text" name='name' value={name} onChange={e=> setName(e.target.value)} 
              className="rounded-0 login-form" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email address<span className="text-danger"> *</span></Form.Label>
              <Form.Control type="email" name='email' value={email} onChange={e=> setEmail(e.target.value)}
              className="rounded-0 login-form" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Password<span className="text-danger"> *</span></Form.Label>
              <Form.Control type="password" name='password' value={password} onChange={e=> setPassword(e.target.value)}
              className="rounded-0 login-form" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Confirm Password<span className="text-danger"> *</span></Form.Label>
              <Form.Control type="password" name='confirmPassword' value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}
              className="rounded-0 login-form" required/>
            </Form.Group>
            <Form.Group className="mb-3 text-secondary" controlId="">
              <Form.Check type="checkbox" label="agree all terms & conditions" />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>} 

            <Button type="submit" className="btn btn-primary w-100 submit-btn rounded-0 px-5 py-2 text-capitalize font-poppins">
              register
            </Button>

          </Form>
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}
export default UserRegistration