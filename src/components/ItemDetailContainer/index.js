import React, {useEffect, useState} from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/index';

function ItemDetailContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        
        .then((res)=> res.json())
        .then((productos)=> setProductos([productos.data[0]]))

    }, [])
    return (
        <>
            {productos.map( producto => <ItemDetail key={producto.id} description={producto.email} img={producto.avatar} name={producto.first_name} stock={producto.stock}/>)}
        </>
    )
}

export default ItemDetailContainer;