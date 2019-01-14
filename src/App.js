import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Color from './Components/Color';
import SelectedColor from './Components/SelectedColor';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName: null,
      selectedColor: 'orange'
    }
  }

  handleNameUpdate(value){
    this.setState({
      userName: value
    })
  }

  handleSelectedColorUpdate(value){
    this.setState({
      selectedColor : value
    })
  }

  render() {
    return (
      <div className='App'>
        <input onChange={(e)=>this.handleNameUpdate(e.target.value)}/>
        {this.state.userName
        ? <div>
            <Header userName={this.state.userName}/>
            <Color backgroundColor={'tomato'} method={(data) => this.handleSelectedColorUpdate(data)}/>
            <Color backgroundColor={'aquamarine'} method={(data) => this.handleSelectedColorUpdate(data)}/>
            <Color backgroundColor={'gray'} method={(data) => this.handleSelectedColorUpdate(data)}/>
            <SelectedColor selectedBackgroundColor={this.state.selectedColor}/>
          </div>
        : 'Please Enter User Name'
        }
      </div>
    );
  }
}

export default App;
