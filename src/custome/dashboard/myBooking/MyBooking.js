import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../../firebase/UseAuth';
import { Spinner } from 'react-bootstrap';

const MyBooking = () => {
    const [orders, setOrders] = useState([]);
    const [isloading, setIsloading] = useState(false)
    const [id, setId] = useState('');
    const { user } = UseAuth();
    useEffect(() => {
        setIsloading(true);
        fetch(`https://sha-auto.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsloading(false);
            })
    }, [id])
    const deleteOrder = id => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`https://sha-auto.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        setId(id)
                        alert('deleted successfully');
                    }
                })
        }
    }
    return (
        <div className='pt-3'>
            <div className='m-3'>
                <h3 style={{ margin: '2% 1%' }}>My orders</h3>
                {isloading ? <div className='d-flex w-100 justify-content-center'>
                    <Spinner animation="border" /></div>
                    : <div>{orders.map(b => <div style={{ borderRadius: '10px', border: '1px solid orange' }} className='d-flex p-2 align-items-center mb-3'>
                        <div className='w-100 d-flex align-items-center justify-content-around'>
                            <h4>Car ID: {b.carId}</h4>
                            <p>Address: {b.address}</p>
                            <h6>Status: {b.status}</h6>
                            <div onClick={() => deleteOrder(b._id)}>
                                <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </div>)
                    }</div>}
            </div>
        </div>
    );
};

export default MyBooking;