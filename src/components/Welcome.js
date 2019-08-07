import React, { Component } from 'react'

// Class Component
// more feature rich
// maintain their own private data - state
// complex UI logic
// provide lifecycle hooks
// stateful/smart/container components
class Welcome extends Component {

    render() {
        const { name, heroName } = this.props
        // const { state1, state2 } = this.state
        return (
        <h1>Welcome {name} aka {heroName}</h1>
        )
    }
}

export default Welcome