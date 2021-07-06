import React, {useEffect, useState} from 'react';
import './ItemList.css'
import Item from '../Item/index';
import {Link} from 'react-router-dom';

function ItemList() {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        
        .then((res)=> res.json())
        .then((productos)=> setProductos(productos))

    }, [])
    return (
        <>
            {productos.map( producto => <div key={producto.id} className="div-cards"><Link className="LinkCard" to={`/detail/${producto.id}`}><Item img={producto.image} name={producto.title} price={producto.price}/></Link></div>)}
        </>
    )
}

export default ItemList;
