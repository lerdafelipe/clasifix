import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import './App.css';
import Header from './components/Header/index';
import Home from './views/Home/Home';
import Cart from './views/cart/Cart';
import Order from './views/Order/Order';
import Categories from './views/Categories/Categories';
import ItemDetailContainer from './views/ItemDetail/ItemDetail';
import Footer from './components/Footer/index'


function App() {
  return (
      <>
        <CartProvider>
          <Router>
            <Header/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/Cart" component={Cart}/>
              <Route path="/detail/:id" component={ItemDetailContainer}/>
              <Route path="/category/:category" component={Categories}/>
              <Route path="/Order" component={Order}/>
            </Switch>
            <Footer/>
          </Router>
        </CartProvider>
      </>
  );
}

export default App;
