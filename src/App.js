import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName: null,
    }
  }
  render() {
    return (
      <div className='App'>
        <input />
        {this.state.userName
        ? <Header userName={this.state.userName}/>
        : 'Please Enter User Name'
        }
        
      </div>
    );
  }
}

export default App;
