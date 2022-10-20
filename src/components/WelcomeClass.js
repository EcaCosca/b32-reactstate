import React, { Component } from 'react'

class WelcomeClass extends Component {
    render(props) {
      console.log(this.props.name)
    return (
        <div>
            <h1>Hello {this.props.name}</h1>
        </div>
    )
  }
}

export default WelcomeClass