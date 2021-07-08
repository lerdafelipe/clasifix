import React, {useEffect, useState} from 'react';
import './ItemList.css'
import Item from '../Item/index';
import {Link} from 'react-router-dom';
import { db } from '../../firebase/firebase';

function ItemList() {
    const [productos, setProductos] = useState([]);

    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
                console.log(docs);
            })
            setProductos(docs);
        })
    }

    useEffect(()=>{
        getProducts();
    }, [])


    return (
        <>
            {productos.map( producto => <div key={producto.id} className="div-cards"><Link className="LinkCard" to={`/detail/${producto.id}`}><Item img={producto.img} name={producto.name} price={producto.price}/></Link></div>)}
        </>
    )
}

export default ItemList;
