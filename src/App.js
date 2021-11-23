import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './custome/home/Home'
import Services from './custome/services/Services';
import NotFound from './custome/NotFound';
import Login from './custome/login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './custome/components/PrivateRoute';
import Booking from './custome/book/Booking';
import Register from './custome/register/Register';
import Dashboard from './custome/dashboard/dashboard-layout/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:cid">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

