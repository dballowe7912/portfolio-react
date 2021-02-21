import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div className="navbar">
                <nav>
                    <button className="close-btn" onClick={this.props.toggleNav}>X</button>
                    <div className="logo">
                        <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="user"/>
                    </div>
                    <ul>
                        <li><NavLink exact activeClassName="active-link" to="/home">Home</NavLink></li>
                        <li><NavLink exact activeClassName="active-link" to="/about">About</NavLink></li>
                        <li><NavLink exact activeClassName="active-link" to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div> 
        )
    }
}

export default Navbar;