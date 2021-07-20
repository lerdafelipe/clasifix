import React, {useEffect, useState, useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import './Order.css'
import noresults from './../cart/img.svg';
import { db } from '../../firebase/firebase';

function Order() {
    const {clearCart, idCompra} = useContext(CartContext);
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getOrder = (Id)=>{
        db.collection('orders').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            const indexCompra = docs.findIndex(compra => compra.id === Id);
            setOrder([docs[indexCompra]]);
            if(indexCompra !== -1){
                setIsLoading(false)
            }
        });
    }

    useEffect(()=>{
        getOrder(idCompra);
        clearCart();
    },[order]);

    if(idCompra === ''){
        return (<>
            <div className="no-found_container">
                <p>¡No has hecho una orden!</p>
                <img alt="no-found-product" src={noresults}></img>
            </div>
        </>)
    }

    return (
        <>
            {isLoading ? (<div className="Loader"></div>)
            : (<><div className="OrderId">
                    <h2>Orden:  
                        <span>
                            {idCompra}
                        </span>
                    </h2>
                </div>
                <ul>
                    {(order[0].Orden).map( (Item) =>{
                        return(<li key={Item.item.id}>
                                    <div>
                                        <span>{Item.item.name}</span>
                                        <p>Cantidad: {Item.cantidad} </p>
                                    </div>
                                    <img src={Item.item.img} alt="Imagen Producto"/>
                                </li>
                        );}
                    )} 
                </ul>
                <h6>El Total de su compra es: ${order[0].Total}</h6>
                {(order).map( (orden) =>{
                    return(<div key={order[0].id} className="delivery-details">
                                <p><span>Enviar a: {orden.Cliente.name} {orden.Cliente.lastname}</span></p>
                                <p><span>Dirección: {orden.Cliente.adress}</span></p>
                                <p><span>Teléfono: {orden.Cliente.phone}</span></p>
                            </div>);
                        }
                )}</>
            )}
           
        </>
    )
}

export default Order;
