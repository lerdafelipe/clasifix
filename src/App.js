import React from 'react';
//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//
import { CartProvider } from './Context/CartContext';
//Styles
import './App.css';
//Import component header
import Header from './components/Header/index';
//Import the views
//Home
import Home from './views/Home/Home';
//Cart
import Cart from './views/cart/cart';
//Order
import Order from './views/Order/Order';
//Categories
import Categories from './views/Categories/Categories';
//Item Detail
import ItemDetailContainer from './views/ItemDetail/ItemDetail';
//Import the views
//Import component footer
import Footer from './components/Footer/index';


function App() {
  return (
      <>
        <CartProvider>

          <Router>

            <Header/>

            <Switch>
                <Route  path="/" exact 
                        component={Home}/>
                <Route  path="/Cart" 
                        component={Cart}/>
                <Route  path="/itemDetail/:id" 
                        component={ItemDetailContainer}/>
                <Route  path="/category/:category" 
                        component={Categories}/>
                <Route  path="/Order" 
                        component={Order}/>
            </Switch>

            <Footer/>

          </Router>

        </CartProvider>
      </>
  );
}

export default App;
