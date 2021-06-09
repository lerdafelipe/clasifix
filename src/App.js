import React from 'react'
import './App.css';
//Components
import NavBar from './components/NavBar/index'
import ItemsListContainer from './components/ItemsListContainer/index'
import ProductCard from './components/ProductCard/index'


function App() {
  return (
    <div>
        <NavBar/>
        <ItemsListContainer description={"Lorem ipsum sahere del parent por intum larme blade the splaning for todem las clasking plarfere"}/>
        <div className="cards-container">
          <ProductCard img={"https://www.vitacost.com/images/modules/icon_new_products.png"}  name={"Auto 0km"}/>
          <ProductCard img={"https://www.vitacost.com/images/modules/icon_new_products.png"}  name={"Camioneta 0km"}/>
          <ProductCard img={"https://www.vitacost.com/images/modules/icon_new_products.png"}  name={"Moto 0km"}/>
          </div>
    </div>
  )
}

export default App;
