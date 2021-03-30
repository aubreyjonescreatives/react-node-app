import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import DeckofCards from './DeckofCards'
import TopNavigation from './TopNavigation'

//import { CSSTransition } from 'react-transition-group'






const routes = [
  { path '/card' Component: DeckofCards}
]

function App() {
 
  return (
    <div className="App">
  <TopNavigation/>
  <DeckofCards/>
 

  </div>
  );


}

export default App;
