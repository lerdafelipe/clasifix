import React from 'react';
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar'
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer'

class App extends React.Component{
  render(){
    return (
      <div>
          <NavBar/>
          <ItemsListContainer description={"Lorem ipsum sahere del parent por intum larme blade the splaning for todem las clasking plarfere"}/>
      </div>
    )
  }
}

export default App;
