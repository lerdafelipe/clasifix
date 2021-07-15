import React, {useEffect, useState} from 'react';
import './ItemList.css'
import Item from '../Item/index';
import {Link} from 'react-router-dom';
import { db } from '../../firebase/firebase';

function ItemList() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            })

            setProductos(docs);
            setIsLoading(!isLoading);
        })
    }

    useEffect(()=>{
        getProducts();
    }, [])


    return (
        <>
            {isLoading ? (<div className="Loader"></div>) : null}
            {productos.map( (producto) => { 
                                return (<div key={producto.id} className="div-cards">
                                            <Link className="LinkCard" to={`/detail/${producto.id}`}>
                                                <Item img={producto.img} name={producto.name} price={producto.price}/>
                                            </Link>
                                        </div>)}
                            )}
        </>
    )
}

export default ItemList;
