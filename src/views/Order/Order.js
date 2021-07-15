import React, {useEffect, useState, useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import { db } from '../../firebase/firebase';

function Order() {
    const [OrderId, setOrderId] = useState('');
    const {CartItems, clearCart, total, Client} = useContext(CartContext);


    useEffect(()=>{
        const order = {'Orden': CartItems, 'Cliente': Client, 'Total': total};
        const ordenes = db.collection('orders');
        ordenes.add(order).then(({id})=>{setOrderId(id)});
        clearCart();
    },[]);

    return (
        <div className="orderContainer">
            <div className="OrderId"><h2>Orden: {OrderId}</h2></div>
        </div>
    )
}

export default Order
