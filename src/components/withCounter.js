import React from "react";

const withCounter = WrappedComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
        name :"brian"
      }
    }

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      })
    }

    render() {
      return (
        <WrappedComponent
          name={this.state.name}
          count={this.state.count}
          increamentCount={this.incrementCount}
          {... this.props}
        />
      )
    }
  }
  return withCounter
};

export default withCounter
