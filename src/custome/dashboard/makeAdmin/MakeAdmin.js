import React, { useEffect, useState } from 'react';
import a from '../../../img/about-banner.jpeg'
import './makeAdmin.css'
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import UseAuth from '../../../firebase/UseAuth';

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { token } = UseAuth();

  const onSubmit = data => {
    axios.put('https://sha-auto.herokuapp.com/users/admin', data)
      .then(res => {
        alert('successfully made');
      })
    reset()
  }
  return (
    <main>
      <div className="p-5">
        <Row>
          <Col sm='12' md='12'>
            <h4 style={{ fontSize: '20px', marginLeft: '30%' }}>Make Admin</h4>
            <form className='form mx-auto' onSubmit={handleSubmit(onSubmit)}>
              <h4 style={{ fontSize: '18px' }}>Email</h4>
              <input className='input' {...register("email", { required: true })} placeholder="Email" />
              <input className='button-book' type="submit" value="Make Admin" />
            </form>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default MakeAdmin;