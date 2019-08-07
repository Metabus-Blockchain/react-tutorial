import React from 'react'

// function Greet () {
//     return <h1>Hello Brian</h1>
// }

// functional component
// simple functions
// absence of 'this' keyword
// solution w/o using state
// mainly responsible for the UI
// stateless / dumb / presentational 
const Greet = props => {
    const { name, heroName } = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
        ) 
}

export default Greet