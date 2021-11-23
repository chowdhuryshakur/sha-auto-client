import React, { useEffect, useState } from 'react';
import a from '../../img/about-banner.jpeg'
import './booking.css'
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import UseAuth from '../../firebase/UseAuth';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Booking = () => {
  const { cid } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = UseAuth();

  const onSubmit = data => {
    data['status'] = 'pending';
    data['carId'] = cid;
    data['user_mail'] = user.email
    data['user_name'] = user.displayName

    axios.post('https://sha-auto.herokuapp.com/orders', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Order Placed successfully');
          reset();
        }
      })
  }
  const head = {
    position: "absolute",
    top: "360px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <div>
      <Header></Header>
      <main>
        <div>
          <img style={{ height: '400px', objectFit: 'cover' }} className='w-100' src={a} alt="" />
          <h1 style={head}>Make Order</h1>
        </div>
        <div className="p-5">
          <Row>
            <Col sm='12' md='8'>
              <h4 style={{ fontSize: '20px', marginLeft: '50px' }}>Order Information</h4>
              <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h4 style={{ fontSize: '18px' }}>Name</h4>
                <input disabled className='input' placeholder={user.displayName} />
                <h4 style={{ fontSize: '18px' }}>Email</h4>
                <input disabled className='input' placeholder={user.email} />
                <h4 style={{ fontSize: '18px' }}>Address</h4>
                <input className='input' {...register("address")} placeholder="Address" />
                <input className='button-book' type="submit" value="Place Order" />
              </form>
            </Col>
          </Row>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Booking;