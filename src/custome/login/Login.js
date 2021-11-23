import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../firebase/UseAuth';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = UseAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <div className='form-login'>
                <div className='w-25 mx-auto mt-5'>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={(e) => handleOnChange(e)} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={(e) => handleOnChange(e)} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <h6>New user? Please<Link to='/register'> Register.</Link></h6>
                        <button variant="primary" type="submit" className='lbutton'>
                            Sign in
                        </button>
                    </Form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;