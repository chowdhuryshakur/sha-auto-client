import React, { useEffect, useState } from 'react';
import a from '../../../img/about-banner.jpeg'
import './addCars.css'
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    data['price'] = parseInt(data['price'])
    axios.post('https://sha-auto.herokuapp.com/cars', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('A new car added successfully');
          reset();
        }
      })
  }
  const head = {
    position: "absolute",
    top: "200px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <main>
      <div className="p-5">
        <Row>
          <Col sm='12' md='12'>
            <h4 style={{ fontSize: '20px', marginLeft: '30%' }}>Add a Car</h4>
            <form className='form mx-auto' onSubmit={handleSubmit(onSubmit)}>
              <h4 style={{ fontSize: '18px' }}>Image</h4>
              <input className='input' {...register("img", { required: true, maxLength: 500 })} placeholder="Image URL" />
              <h4 style={{ fontSize: '18px' }}>Name</h4>
              <input className='input' {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
              <h4 style={{ fontSize: '18px' }}>Description</h4>
              <input className='input' {...register("desc", { required: true })} placeholder="A short description" />
              <h4 style={{ fontSize: '18px' }}>Price</h4>
              <input type="number" className='input' {...register("price", { required: true })} placeholder="price" />
              <input className='button-book' type="submit" value="Add" />
            </form>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default AddCar;