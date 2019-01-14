import React, {Component} from 'react'

class Color extends Component {
    render(){
        return (
            <div 
                style={{height: '75px', width: '75px', backgroundColor: this.props.backgroundColor}}
                onClick={()=> this.props.method(this.props.backgroundColor)}>
                
            </div>
        )
    }
}

export default Color