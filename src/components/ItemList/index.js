import React, {useEffect, useState} from 'react';
import './ItemList.css'
import Item from '../Item/index';

function ItemList() {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        
        .then((res)=> res.json())
        .then((api)=> api.data)
        .then((productos)=> setProductos(productos))

    }, [])

    return (
        <>
            {productos.map( producto => <Item key={producto.id} img={producto.avatar} name={producto.first_name} stock={producto.stock}/>)}
        </>
    )
}

export default ItemList;
