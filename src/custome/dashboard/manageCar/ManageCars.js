import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    const [isloading, setIsloading] = useState(false)
    const [id, setId] = useState('');
    useEffect(() => {
        setIsloading(true);
        fetch(`https://sha-auto.herokuapp.com/cars`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setIsloading(false);
            })
    }, [id])
    const deleteCar = id => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`https://sha-auto.herokuapp.com/cars/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        setId(id)
                        alert('deleted successfully');
                    }
                })
        }
    }
    return (
        <div className='p-3'>
            <div className='m-3'>
                <h3 className='mb-3'>All Cars</h3>
                {isloading ? <div className='d-flex w-100 justify-content-center'>
                    <Spinner animation="border" /></div>
                    : <div>
                        {cars.map(b => <div style={{ borderRadius: '10px', border: '1px solid orange' }} className='d-flex p-2 mb-3 align-items-center'>
                            <div className='w-100 d-flex align-items-center justify-content-around'>
                                <img width='15%' src={b.img} alt="" />
                                <h6>Model Name: {b.name}</h6>
                                <h6>Price: {b.price}</h6>
                                <div onClick={() => deleteCar(b._id)}>
                                    <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </div>)}</div>}
            </div>
        </div>
    );
};

export default ManageCars;