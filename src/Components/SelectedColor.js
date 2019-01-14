import React, {Component} from 'react'

class SelectedColor extends Component {
    render(){
        return (
            <div 
                style={{
                    height: '300px', 
                    width: '500px', 
                    backgroundColor: this.props.selectedBackgroundColor
                }}
            >
                {this.props.selectedBackgroundColor}
            </div>
        )
    }
}

export default SelectedColor