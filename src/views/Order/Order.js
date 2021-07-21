import React, {useEffect, useState, useContext} from 'react';
//Import Cart Context
import { CartContext } from '../../Context/CartContext';
//Styles
import './Order.css';
//If the order doesn't exist, return this image
import noresults from './../cart/img.svg';
//Import firestore/firebase
import { db } from '../../firebase/firebase';

function Order() {
    //Importing functions and info from Cart Context
    const {clearCart, idCompra} = useContext(CartContext);
    //Declaring the array order
    const [order, setOrder] = useState([]);
    //Start ando stop loader
    const [isLoading, setIsLoading] = useState(true);
    //OrderExist
    const [orderExist, setOrderExist] = useState(false);

    //Getting the orders from firestore/firebase
    const getOrder = (Id)=>{
        //getting the info from the collection orders
        db.collection('orders').onSnapshot((querySnapshot)=>{
            const docs = [];
            //pushing the orders in the array 'docs'
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            //Getting the index of the order that matching with the Id
            const indexCompra = docs.findIndex(compra => compra.id === Id);
            if(indexCompra !== -1){
                //Pushing the order matching in the array order
                setOrder([docs[indexCompra]]);
                //If the order exist, stop the loader
                setIsLoading(false);
                setOrderExist(true);
            }else{
                setOrderExist(false);
            }
        });
    }

    useEffect(()=>{
        getOrder(idCompra);
        clearCart();
    },[order]);


    return (
        <>
            {isLoading ? (<div className="Loader"></div>):null}
            {orderExist ? (<><div className="OrderId">
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
            ) 
            : (<>
                <div className="no-found_container">
                    <p>¡No has hecho una orden!</p>
                    <img alt="no-found-product" src={noresults}></img>
                </div>
              </>)}
           
        </>
    );
}

export default Order;
