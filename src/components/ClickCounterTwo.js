import React, { Component } from 'react'

class ClickCounterTwo extends Component {


    render() {
        return (
            <button onClick={this.props.incrementCount}>CLicked {this.props.count} times</button>
        )
    }
}

export default ClickCounterTwo