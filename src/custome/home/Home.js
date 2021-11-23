import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './home.css'

const Home = () => {
  const [cars, setcars] = useState([])
  const [discount, setDiscount] = useState([])
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://sha-auto.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => setcars(data))
  }, [])
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data => setDiscount(data))
  }, [])
  useEffect(() => {
    fetch('https://sha-auto.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div>
      <Header></Header>
      <main style={{ backgroundColor: '#EDF2FF' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '550px' }}
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>City Ride</h3>
              <p>Shaverlet is a genious brand for specially city people.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '550px' }}
              src={banner2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Super Sale</h3>
              <p>Buy 2 get 1 !!! Offer for limited period.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: '550px' }}
              src={banner3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Lot Sale</h3>
              <p>We are offering special cotation for our dealers!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="p-5">
          <h1 className="title text-center">Best Cars</h1>
          <p className="sub-title text-center">Some of Our Best selling cars</p>
          <div className='w-75 mx-auto'>
            <Row xs={1} md={3} className="g-5">
              {cars.slice(0, 6).map(offer => (
                <Col>
                  <Card>
                    <Card.Img style={{ height: '260px' }} variant="top" src={offer.img} />
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
            </Row>
          </div>
        </div>
        <div className="p-5">
          <h1 className="title text-center">Deals & Discounts</h1>
          <p className="sub-title text-center">Best cars at chepest price with tempting discount. Only for you!</p>
          <div className='w-75 mx-auto'>
            <Row xs={1} md={4} className="g-2">
              {discount.slice(0, 4).map(disc => (
                <Col>
                  <Card>
                    <Card.Img style={{ height: '180px' }} variant="top" src={disc.picture} />
                    <Card.Body>
                      <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{disc.name}</Card.Title>
                      <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                        Discount price: ${disc.hadiya}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="p-5">
          <h1 className="title text-center">Reviews</h1>
          <div className='w-75 mx-auto'>
            <Row xs={1} md={4} className="g-3">
              {reviews.map(re => (
                <Col className='border border-white'>
                  <Card>
                    <Card.Body>
                      <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{re.name}</Card.Title>
                      <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                        {re.email}
                      </Card.Text>
                      <div className="d-flex">
                        {new Array(5).fill().map((listItem, index) => {
                          return (
                            <div key={index}>
                              {index + 1 <= re.ratings ? <svg style={{ width: '25px', color: '#E33315' }} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg> : <svg style={{ width: '20px', color: '#E33315' }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>}
                            </div>
                          )
                        })}
                      </div>
                      <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                        {re.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;