import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../../firebase/UseAuth';
import axios from 'axios';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = UseAuth();

    const onSubmit = data => {
        data['email'] = user.email
        data['name'] = user.displayName

        axios.post('https://sha-auto.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your review has stored.');
                    reset();
                }
            })
    }

    return (
        <div>
            <main>
                <div className="p-5">
                    <Row>
                        <Col sm='12' md='8'>
                            <h4 style={{ fontSize: '20px' }}>Make a review</h4>
                            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                                <h4 style={{ fontSize: '18px' }}>Ratings</h4>
                                <input className='input' {...register("ratings")} type='number' min="1" max="5" placeholder="ratings" />
                                <h4 style={{ fontSize: '18px' }}>Comment</h4>
                                <input className='input' {...register("desc")} placeholder="Your Comment" />
                                <input className='button-book' type="submit" value="Rate" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </main>
        </div>
    );
};

export default Review;