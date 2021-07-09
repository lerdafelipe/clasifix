import React, {useEffect, useState} from 'react';
import ItemDetail from './../../components/ItemDetail/index';
import { db } from './../../firebase/firebase';

function ItemDetailContainer({match}) {
    const [productos, setProductos] = useState([]);
    let productId= match.params.id;

    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
                console.log(docs);
            })
            const productoElegido = docs.find(producto => producto.id === productId);
            setProductos([productoElegido]);
        })
    }

    useEffect(()=>{
        getProducts();
    },[productId]);
    
    return (
        <>
            {productos.map( (producto) =>{
                return(<ItemDetail key={productId} producto={producto}/>);
                }
            )}
        </>
    );
}

export default ItemDetailContainer;
