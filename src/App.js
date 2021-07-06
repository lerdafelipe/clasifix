import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
//Components
import Header from './components/Header/index'
import Home from './views/Home/Home';
import Cart from './views/cart/Cart';
import Categories from './views/Categories/Categories';
import ItemDetailContainer from './views/ItemDetail/ItemDetail';


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
            </Switch>
          </Router>
        </CartProvider>
      </>
  )
}

export default App;
