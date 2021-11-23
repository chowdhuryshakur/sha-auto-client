import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './register.css'

const Register = () => {
    const [regData, setRegData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = UseAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData };
        newRegData[field] = value;
        setRegData(newRegData);
    }
    const handleRegSubmit = e => {
        registerUser(regData.email, regData.password, regData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <div className='form-login'>
                <div className='w-25 mx-auto mt-5'>
                    <Form onSubmit={handleRegSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={e => handleOnBlur(e)} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={e => handleOnBlur(e)} name="name" type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={e => handleOnBlur(e)} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <h6>Already have an accound? Please<Link to='login'> login.</Link></h6>
                        <button type="submit" className='lbutton'>
                            Register
                        </button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;