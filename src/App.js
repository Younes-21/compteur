import './App.css';
import React, { Component } from "react";
import Compteur from "./compteur.js";
class App extends Component {
  
  render () {return (
    <div className="App">
     <h1> Compteur:</h1>
      <Compteur />
    </div>
  );
}}

export default App;
