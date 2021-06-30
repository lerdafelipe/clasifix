import React, {useEffect, useState} from 'react';
import ItemDetail from './../../components/ItemDetail/index';

function ItemDetailContainer({match}) {
    const [productos, setProductos] = useState([]);
    let productId= match.params.id;
    let product = productId - 1;

    useEffect(()=>{
        fetch(`https://mocki.io/v1/7a65d367-1bb9-4027-837f-e687fc72f754`)
        
        .then((res)=> res.json())
        .then((prd)=> prd[product])
        .then((productos)=> setProductos([productos]))

    },[product])
    return (
        <>
            {productos.map( producto => <ItemDetail key={producto.id} description={producto.description} price={producto.price} img={producto.image} name={producto.title} stock={producto.stock}/>)}
        </>
    )
}

export default ItemDetailContainer;
