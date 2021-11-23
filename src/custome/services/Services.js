import React, { useEffect, useState } from 'react';
import a from '../../img/about-banner.jpeg'
import './services.css'
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Courses = () => {
  const [cars, setCars] = useState([])
  const [isloading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
    fetch('https://sha-auto.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setIsloading(false);
      })
  }, [])
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
      <main style={{ minHeight: '100vh' }}>
        <div className="p">
          <img style={{ height: '400px', objectFit: 'cover' }} className='w-100' src={a} alt="" />
          <h1 style={head}>Cars</h1>
        </div>
        <div className="p-5">
          {isloading ? <div className='d-flex w-100 justify-content-center'>
            <Spinner animation="border" /></div>
            : <Row xs={1} md={3} className="g-5">
              {cars.map(offer => (
                <Col>
                  <Card>
                    <Card.Img style={{ height: '300px' }} variant="top" src={offer.img} />
                    <Card.Body className='d-flex align-items-center flex-column pb-3'>
                      <Card.Title style={{ color: '#2D2E40', fontSize: '40px' }}>{offer.name}</Card.Title>
                      <Card.Text className='d-flex' style={{ textAlign: 'center', color: '#2D2E40', fontWeight: "none" }}>
                        {offer.desc.slice(0, 50)}
                      </Card.Text>
                      <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                        Price: ${offer.price}
                      </Card.Text>
                      <Link className="button"
                        to={`/details/${offer._id}`}
                      >Buy Now</Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Courses;