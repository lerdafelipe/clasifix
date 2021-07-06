import React, {createContext, useState} from 'react'

export const CartContext = createContext();


export function CartProvider({defaultValue = [], children}) {
    const [CartItems, setCartItems] = useState(defaultValue)

    const removeItem = (id)=>{
        setCartItems (CartItems.filter(({item})=> item.id !== id));
    }

    const cartNumber = () =>{
        return CartItems.length;
    }

    const addItem = (item, cantidad)=>{
        let repetitive = [];
        repetitive= CartItems.findIndex(Item => item.id === Item.item.id);
        if(repetitive===-1){
            setCartItems([...CartItems,{item, cantidad}])
        }else{
            let itemModifier = [...CartItems];
            itemModifier[repetitive].cantidad += cantidad;
            setCartItems(itemModifier)
        }
   };

   const totalProduct = (item)=>{
       return item.item.price * item.cantidad;
   }

   const total = CartItems.reduce((totalPrice, item)=>{return (item.item.price * item.cantidad) + totalPrice}, 0)


   const clearCart = ()=>{
    setCartItems([]);
}
    

    return <CartContext.Provider value={{CartItems, addItem, removeItem, clearCart, totalProduct, total, cartNumber}}>{children}</CartContext.Provider>
}
