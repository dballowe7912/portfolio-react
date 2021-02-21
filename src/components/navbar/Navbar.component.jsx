import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className="navbar">
                <nav>
                    <button onClick={this.props.toggleNav}>X</button>
                    <div className="logo">
                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user"/>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div> 
        )
    }
}

export default Navbar;