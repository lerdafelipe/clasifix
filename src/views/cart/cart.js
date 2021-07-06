import React, {useContext} from 'react'
import { CartContext } from '../../CartContext'
import './Cart.css'
import ItemCart from '../../components/ItemCart'


function Cart() {
    const {CartItems, removeItem, clearCart, totalProduct, total, cartNumber} = useContext(CartContext)

    if(cartNumber() === 0){
        return <p>No hay elementos en el carrito</p>
    }

    return (
        <div className="container"> 
            <h1>Carrito</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Cantidad</th>
                        <th>Precio/U.</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {CartItems.map(Item=> <ItemCart key={Item.item.id} item={Item} unitary={totalProduct(Item)} remove={()=>removeItem(Item.item.id)}></ItemCart>)}
                </tbody>
            </table>
            <h5> Total:    ${total}</h5>
            <button className="clear-cart" onClick={clearCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
