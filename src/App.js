import React from 'react';
import './App.css';

//Componentes de tipo clase
//Componentes de tipo function

class App extends React.Component{
  render(){
    return (
      <>
        <h1>Clasifix</h1>
        <nav>
          <ul>
            <li><a href="#">Entradas</a></li>
            <li><a href="#">Platos Principales</a></li>
            <li><a href="#">Postres</a></li>
            <li><a href="#">Bebidas</a></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default App;
