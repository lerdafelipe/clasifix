import React from 'react';
// Styles
import './ItemsListContainer.css';
// Import List products component
import ItemList from '../ItemList/index';

function ItemsListContainer() {
  return (
    <div className="itemsListContainer">
      <ItemList />
    </div>
  );
}

export default ItemsListContainer;
