import React, {useContext, useState} from 'react';
import './FormDelivery.css';
import {useFormik} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import {CartContext} from '../../Context/CartContext'
import { db } from '../../firebase/firebase';


function FormDelivery() {
    const [sendOrder, setSendOrder] = useState(false);
    const {CartItems, total, newIdCompra, clearCart} = useContext(CartContext);

    const formik = useFormik({
        initialValues:{
            name: '',
            lastname: '',
            email:'',
            phone: null,
            adress: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El Nombre es obligatorio'),
            lastname: Yup.string().required('El Apellido es obligatorio'),
            email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
            phone: Yup.number('El teléfono debe ser un númerod').min(6, 'Tu número de teléfono es incorrecto').required('Tu teléfono es obligatorio'),
            adress: Yup.string().required('Necesitamos tu dirección para el delivery')
        }),
        onSubmit: (clientData)=>{
            const order = {'Orden': CartItems, 'Cliente': clientData, 'Total': total};
            const ordenes = db.collection('orders');
            ordenes.add(order).then(({id})=>{newIdCompra(id)});
            setSendOrder(true);
            setTimeout(clearCart, 12000);
        }
    })

    return (
        <div className="form-container">
            <h1>Datos</h1>
            <form className="formDelivery" onSubmit={formik.handleSubmit}>
                <div className="w-50">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        onChange={formik.handleChange}
                    />
                    <p>{formik.errors.name}</p>
                </div>
                <div className="w-50">
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Apellido"
                        onChange={formik.handleChange}
                    />
                    <p>{formik.errors.lastname}</p>
                </div>
                <div className="w-100">
                    <input
                        type="string"
                        name="email"
                        placeholder="E-mail"
                        onChange={formik.handleChange}
                    />
                    <p>{formik.errors.email}</p>
                </div>
                <div className="w-100">
                    <input
                        type="number"
                        name="phone"
                        placeholder="Teléfono"
                        onChange={formik.handleChange}
                    />
                    <p>{formik.errors.phone}</p>
                </div>
                <div className="w-100">
                    <input
                        type="string"
                        name="adress"
                        placeholder="Dirección"
                        onChange={formik.handleChange}
                    />
                    <p>{formik.errors.adress}</p>
                </div>
                <div className="form-container_Button">

                {sendOrder ? (<><div className="button-viewOrder">
                                    <p>¡Orden Enviada!</p> 
                                    <Link to="/Order">
                                        <span>Ver Detalles</span>
                                    </Link></div></>)
                            :(<button type="submit" >
                                Finalizar Compra
                            </button>)}
                </div>
            </form>
        </div>
    )
}

export default FormDelivery;
