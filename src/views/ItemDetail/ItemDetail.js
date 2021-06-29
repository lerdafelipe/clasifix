import React, {useEffect, useState} from 'react';
import ItemDetail from './../../components/ItemDetail/index';

function ItemDetailContainer({match}) {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        
        .then((res)=> res.json())
        .then((productos)=> setProductos([productos]))

    },[match.params.id])
    return (
        <>
            {productos.map( producto => <ItemDetail key={producto.id} description={producto.description} price={producto.price} img={producto.image} name={producto.title} stock={producto.stock}/>)}
        </>
    )
}

export default ItemDetailContainer;
