import React, {useEffect, useState} from 'react';
import Item from './../../components/Item/index';
import {Link} from 'react-router-dom'
import './Categories.css'
import {db} from './../../firebase/firebase'

function Categories({match}) {
    const [productos, setProductos] = useState([]);
    let categoriaElegida = match.params.category;

    const getProducts = ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];

            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
                console.log(docs);
            })
            const productosCategoria = docs.filter(producto => producto.category === categoriaElegida)
            setProductos(productosCategoria);
        })
    }

    useEffect(()=>{
        getProducts();
    }, [match.params.category]);

    return (
        <>
        <div className="itemsListContainer">
            {productos.map( producto => <Link key={producto.id} className="LinkCard" to={`/detail/${producto.id}`}><Item price={producto.price} img={producto.img} name={producto.name} stock={producto.stock}/></Link>)}
        </div>
        </>
    )
}

export default Categories;
