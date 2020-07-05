import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        counter: 0
    }

    decreaseCounter = () => {
        this.setState( { 
            counter: this.state.counter - 1 } )
    }

    increaseCounter = () => {
        this.setState( { 
            counter: this.state.counter + 1 } )
    }


    render() {
        return (
            <div className = "App">
             <h1>{this.state.counter}</h1>
             <button onClick={this.decreaseCounter}>-</button>
             <button onClick={this.increaseCounter}>+</button>
            </div>
        );
    }
}

export default App;