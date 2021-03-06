import React, { Component } from 'react';

import './Header.style.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleNav();
    }


    render() {
        return (
            <div className="header">
                <header>
                    <button id="toggle" onClick={this.handleClick} className="toggle">
                        <i className="fa fa-bars fa-2x"></i>
                    </button>
                    <h1>Hi, my name Donald,</h1>

                    <p>I am a freelance web developer out of Texas</p>

                    <button className="cta-btn" id="open">Contact Me</button>
                </header>
            </div>
        )
    }
}

export default Header;
