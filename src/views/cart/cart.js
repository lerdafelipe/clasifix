import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import ItemCart from '../../components/ItemCart';
import noresults from './img.svg'
import FormDelivery from '../../components/FormDelivery';


function Cart() {
    const {CartItems, removeItem, clearCart, totalProduct, total, cartNumber} = useContext(CartContext);

    if(cartNumber === 0){
        return (<>
                    <div className="no-found_container">
                        <p>Ups! No se han encontrado elementos en el carrito</p>
                        <img alt="no-found-product" src={noresults}></img>
                    </div>
                </>)
    }

    return (
        <div className="container"> 
            <div className="cart-container">
                <h1>Carrito</h1>  
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cant.</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CartItems.map((Item)=>{
                            return (<ItemCart 
                                        key={Item.item.id} 
                                        item={Item} 
                                        unitary={totalProduct(Item)} 
                                        remove={()=>removeItem(Item.item.id)}>
                            </ItemCart>)})}
                    </tbody>
                </table>

                <h5> Total:    ${total}</h5>

                <div className="cart-container_Button">
                    <button className="clear-cart" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                </div>
            </div>
            <FormDelivery/>
        </div>
    );
}

export default Cart;
