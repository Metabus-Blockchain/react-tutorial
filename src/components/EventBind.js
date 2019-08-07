import React, { Component } from 'react'

//rce + tab
class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     }) 
    //     console.log(this)
    // }
    
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* method one - not recommended */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                
                {/* method two - easiest option */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                
                {/* method three - binding in the constructor (most common method)*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
