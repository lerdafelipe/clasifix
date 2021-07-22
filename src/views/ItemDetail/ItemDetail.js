import React, {useEffect, useState} from 'react';
//Import component
import ItemDetail from './../../components/ItemDetail/index';
//Styles
import './ItemDetailView.css'
//If the product doesn't exist, return this image
import productNoFound from './product-nofound.svg'
//import firestor/firebase
import { db } from './../../firebase/firebase';

function ItemDetailContainer({match}) {
    //Declaring the array products
    const [productos, setProductos] = useState([]);
    //Start an stop the loader
    const [isLoading, setIsLoading] = useState(true);
    //Getting param id from the url
    let productId= match.params.id;

    //Getting the products from firestore/firebase
    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];
            //Pushing all the products in docs
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            //Finding the product matching with the id in 'docs'
            const productoElegido = docs.find(producto => producto.id === productId);
            if(productoElegido !== undefined){
                //if the product exist, it push in the array products and stop loader
                setProductos([productoElegido]);
                setIsLoading(false);
            }
        })
    }

    useEffect(()=>{
        //for each time when you select a diferent product, the loader start
        setIsLoading(true);
        getProducts();
    },[]);

    //If the product doesn't exist, return the next lines
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
