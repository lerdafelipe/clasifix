import React, {useEffect, useState} from 'react';
//Import componet item
import Item from './../../components/Item/index';
//Router
import {Link} from 'react-router-dom';
//Styles
import './Categories.css';
//Import firestore/firebase
import {db} from './../../firebase/firebase';

function Categories({match}) {
    //Declaring the array of products
    const [productos, setProductos] = useState([]);
    //Start and stop Loader
    const [isLoading, setIsLoading] = useState(true);

    //Gettings params from url
    let categoriaElegida = match.params.category;

    //Getting products from firestore/firebase
    const getProducts = ()=>{
        //getting the collection products
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];
            //pushing all the products and his id from the collection
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id});
            });
            //filtering the product by category
            const productosCategoria = docs.filter(producto => producto.category === categoriaElegida)
            //Pushing the products of the selected category in the array products
            setProductos(productosCategoria);
            //Stop Loader
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        //for each time when you select a diferent category, the loader start
        setIsLoading(true);
        getProducts();
    }, [match.params.category]);

    return (
        <>   
        <h3 className="title-category">{categoriaElegida}</h3>
        {isLoading ? (<div className="Loader"></div>) : null}
        <div className="itemsListContainer">
            {productos.map( (producto) =>{
                return (<div  key={producto.id} className="div-cards">
                            <Link className="LinkCard" to={`/itemDetail/${producto.id}`}>
                                <Item price={producto.price} 
                                    img={producto.img} 
                                    name={producto.name} 
                                    stock={producto.stock}/>
                            </Link>
                        </div>)
                    }
            )}
        </div>
        </>
    );
}

export default Categories;
