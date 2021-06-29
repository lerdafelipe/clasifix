import React, {useEffect, useState} from 'react';
import Item from './../../components/Item/index';
import {Link} from 'react-router-dom'
import './Categories.css'

function Categories({match}) {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${match.params.category}`)
        
        .then((res)=> res.json())
        .then((productos)=> setProductos(productos))

    }, [match.params.category])
    return (
        <>
        <div className="itemsListContainer">
            {productos.map( producto => <Link key={producto.id} className="LinkCard" to={`/detail/${producto.id}`}><Item img={producto.image} name={producto.title} stock={producto.stock}/></Link>)}
        </div>
        </>
    )
}

export default Categories;
