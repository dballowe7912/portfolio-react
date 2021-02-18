import React, { Component } from 'react'

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="container">
                    <h2>About Me</h2>
                    <p>I was born and raised in San Antonio, Texas and have lived and traveled all over the United States
                    working various jobs. I'm a jack of all trades, yet didn't discover my true passion in life 
                    until I started building websites. I spend all the free time I have learning and practicing web development.
                    Becoming a freelance web developer is a dream I have made a reality. The main two reasons to work
                    with me are split between my determination, to go above and beyond to reach goals, and my reliabilty to 
                    deliver a quality product.
                    </p>
                    <hr/>
                    <p>My second passion in life is music. I love to play guitar and just like web developement I like to try and 
                        figure out how to play different songs. Music fuels an ongoing project I started when I first began programming
                         called Simply Music. Simply music is just that, a simple music recording web app that's easy to use and kid friendly,
                         so that anyone can use it to create a masterpiece.
                    </p>

                </div>
            </div>
        )
    }
}

export default MainContent;