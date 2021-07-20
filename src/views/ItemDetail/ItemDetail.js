import React, {useEffect, useState} from 'react';
import ItemDetail from './../../components/ItemDetail/index';
import './ItemDetailView.css'
import productNoFound from './product-nofound.svg'
import { db } from './../../firebase/firebase';

function ItemDetailContainer({match}) {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let productId= match.params.id;

    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            const productoElegido = docs.find(producto => producto.id === productId);
            if(productoElegido !== undefined){
                setProductos([productoElegido]);
                setIsLoading(false);
            }
        })
    }

    useEffect(()=>{
        setIsLoading(true);
        getProducts();
    },[]);

    if(productos.length === 0){
        return <>
                <div className="product-nofound">
                    <h4>Ups! Este producto no existe</h4>
                    <img className="img-nofound" src={productNoFound} alt="Producto no encontrado"/>
                </div>
        </>
    }
    
    return (
        <>
            {isLoading ? (<div className="Loader"></div>) : null}
            {productos.map( (producto) =>{
                return(<ItemDetail key={productId} producto={producto}/>);
                }
            )}
        </>
    );
}

export default ItemDetailContainer;
