import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MyBooking from '../myBooking/MyBooking';
import ManageOrders from '../manageOrders/ManageOrders';
import Pay from '../pay/Pay';
import UseAuth from '../../../firebase/UseAuth';
import './dashboard.css'
import Review from '../review/Review';
import AddCar from '../addcar/AddCar';
import AdminRoute from '../../components/AdminRoute';
import MakeAdmin from '../makeAdmin/MakeAdmin';
import ManageCars from '../manageCar/ManageCars';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout } = UseAuth();
    return (
        <div>
            <Row style={{ margin: '0' }}>
                <Col lg='2' style={{ padding: '0' }}>
                    <div style={{ backgroundColor: '#313A46', height: '215vh', padding: '100px 50px 0 50px' }}>
                        {admin ? <div>
                            <Link className='link' to={`${url}/manageorder`}>Manage All Orders</Link>
                            <Link className='link' to={`${url}/addcar`}>Add a Car</Link>
                            <Link className='link' to={`${url}/makeadmin`}>Make admin</Link>
                            <Link className='link' to={`${url}/managecar`}>Manage Car</Link>
                        </div> : <div>
                            <Link className='link' to={`${url}`}>Pay</Link>
                            <Link className='link' to={`${url}/myorder`}>My Order</Link>
                            <Link className='link' to={`${url}/review`}>Review</Link>
                        </div>}
                        <button className='logoutbtn' onClick={logout}>Logout</button>
                    </div>
                </Col>
                <Col lg='10' style={{ padding: '0' }}>
                    <div style={{ padding: '30px 30px' }}>
                        <h4>Dashboard</h4>
                    </div>
                    <div style={{ backgroundColor: '#EDF2FF', height: '200vh' }}>
                        <Switch>
                            <Route exact path={`${path}/myorder`}>
                                <MyBooking></MyBooking>
                            </Route>
                            <Route exact path={path}>
                                <Pay />
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <AdminRoute path={`${path}/addcar`}>
                                <AddCar></AddCar>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageorder`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/managecar`}>
                                <ManageCars></ManageCars>
                            </AdminRoute>
                        </Switch>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;