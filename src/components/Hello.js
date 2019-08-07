import React, { Component } from 'react'

// JSX version
// const Hello = () => {
//     return (
//         <div className='dummyClass'>
//             <h1>Hi Brian</h1>
//         </div>
//     )
// }

// const Hello = () => {
//     return React.createElement(
//         'div', 
//         { id: 'hello', className: 'dummyClass' }, 
//         React.createElement('h1', null, 'Hi Brian')
//     )
// }

class Hello extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hello visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Hello