import React, {useEffect, useState} from 'react';
//Styles
import './ItemList.css'
//Component Item
import Item from '../Item/index';
//router
import {Link} from 'react-router-dom';
//import firestore/firebase
import { db } from '../../firebase/firebase';

function ItemList() {
    //Products array
    const [productos, setProductos] = useState([]);
    //start loader active
    const [isLoading, setIsLoading] = useState(true);

    //Getting products from the collection productos at firestore
    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];
            //Pushing info at array docs
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })
            //Pushing docs ata products array
            setProductos(docs);
            //finalize loader
            setIsLoading(!isLoading);
        })
    }

    //Getting products when the component did mount
    useEffect(()=>{
        getProducts();
    }, [])


    return (
        <>
            {isLoading ? (<div className="Loader"></div>) : null}
            {productos.map( (producto) => { 
                                return (<div key={producto.id} className="div-cards">
                                            <Link className="LinkCard" to={`/itemDetail/${producto.id}`}>
                                                <Item img={producto.img} name={producto.name} price={producto.price}/>
                                            </Link>
                                        </div>)}
                            )}
        </>
    );
}

export default ItemList;
