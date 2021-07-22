import React, { createContext, useState } from 'react';
// Exporting CartContext
export const CartContext = createContext();

// Creating and exporting The provider from CartContext
export function CartProvider({ defaultValue = [], children }) {
  // Declaring the array of products in the cart
  const [CartItems, setCartItems] = useState(defaultValue);
  // Declaring the id of the order
  const [idCompra, setIdCompra] = useState('');

  // Function for remove items from cart
  const removeItem = (id) => {
    setCartItems(CartItems.filter(({ item }) => item.id !== id));
  };

  // Function that return the quantity of products in the cart
  const cartNumber = CartItems.reduce((totalNumber, item) => item.cantidad + totalNumber, 0);

  // Function add item to the cart context
  const addItem = (item, cantidad) => {
    let repetitive = [];
    // If the product is repetitive, the next method find the index, and return it
    repetitive = CartItems.findIndex((Item) => item.id === Item.item.id);
    // If the product isn't in the cart, that will be added
    if (repetitive === -1) {
      setCartItems([...CartItems, { item, cantidad }]);
    }
    // If the product is in the cart, increment his quantity
    else {
      const itemModifier = [...CartItems];

      itemModifier[repetitive].cantidad += cantidad;

      setCartItems(itemModifier);
    }
  };

  // Function, return the subtotal of a product
  const totalProduct = (item) =>{
    return item.item.price * item.cantidad;
  }

  // Functuion, return the total of all products
  const total = CartItems.reduce((totalPrice, item) => (item.item.price * item.cantidad) + totalPrice, 0)

  // Function, remove all the producto of the cart
  const clearCart = () => {
    setCartItems([]);
  }

  // Adding the id of the last order
  const newIdCompra = (id) => {
    setIdCompra(id);
  }

  // exporting the function from cart provider
  return (
    <CartContext.Provider value={{CartItems, addItem, removeItem, clearCart, totalProduct, total, cartNumber, idCompra, newIdCompra}}>{children}</CartContext.Provider>
  );
}
