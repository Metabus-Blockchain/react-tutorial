import React, { Component } from 'react'


class Message extends Component {
    constructor() {
        super()
        // create 'state' object
        this.state = {
            // #1 - initialize the property
            message: 'Welcome visitor'
        }
    }

    // method
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                {/* #2 - bind the state value in the render function  */}
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message