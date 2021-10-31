import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import About from './pages/About/About';
import AddFood from './pages/AddFood/AddFood';
import AllFoods from './pages/AllFoods/AllFoods';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageAllOrder from './pages/ManageAllOrder/ManageAllOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import NotFound from './pages/NotFound/NotFound';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

const App = () => {
  const [orderedFood, setOrderedFood] = useState({});

  const handleOrderNow = (food) => {
    setOrderedFood(food);
  };

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home handleOrderNow={handleOrderNow} />
          </Route>
          <Route exact path="/home">
            <Home handleOrderNow={handleOrderNow} />
          </Route>
          <Route path="/foods">
            <AllFoods handleOrderNow={handleOrderNow} />
          </Route>
          <PrivateRoute path="/place-order">
            <PlaceOrder orderedFood={orderedFood} />
          </PrivateRoute>
          <PrivateRoute path="/my-orders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path="/manage-all-order">
            <ManageAllOrder />
          </PrivateRoute>
          <PrivateRoute path="/add-food">
            <AddFood />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
