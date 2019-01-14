import React, {Component} from 'react'

class Header extends Component {
    render(){
        return (
            <header>
                {this.props.userName} Color Palette
            </header>
        )
    }
}

export default Header 