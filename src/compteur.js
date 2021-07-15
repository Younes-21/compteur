import React, { Component } from "react";
import './App.css';
var nb=0;
class Compteur extends Component {
    constructor(props){
super(props);
this.state = {
count:0
};

    }
 increment =() =>{
    this.setState({
        count : this.state.count+1
    });
};
decrement =()=>{
    this.setState({
        count : this.state.count-1
    });
};
    render () { return (
        <div> <p>La valeur actuelle est : { this.state.count }</p>
           <button onClick={this.increment} >+</button>
           <button onClick={this.decrement}>-</button>
        </div>
      );
    }}
    
   
            
       /*  increment =() =>{
           nb=nb+1;
            
        };
        decrement =()=>{
            nb=nb-1;
        };
            render () { return (
                <div> <p>La valeur actuelle est : {this.nb}</p>
                   <button onClick={this.increment} >+</button>
                   <button onClick={this.decrement}>-</button>
                </div>
              );
            }}*/

export default Compteur;
