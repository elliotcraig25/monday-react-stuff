import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Color from './Components/Color'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName: null,
    }
    // this.handleNameUpdate = this.handleNameUpdate.bind(this)
  }

  handleNameUpdate(value){
    console.log('update name ran')
    this.setState({
      userName: value
    })
  }

  render() {
    return (
      <div className='App'>
        <input onChange={e=>this.handleNameUpdate(e.target.value)}/>
        {this.state.userName
        ? <div>
            <Header userName={this.state.userName}/>
            <Color />
          </div>
        : 'Please Enter User Name'
        }
      </div>
    );
  }
}

export default App;
