import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clicked = this.clicked.bind(this);
    }
    // clicked() {
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    // }
    clicked = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                {/* <button onClick={this.clicked.bind(this)}>Click me</button> */}
                {/* <button onClick={() => this.clicked()}>Click me</button> */}
                <button onClick={this.clicked}>Click me</button>
            </div>
        )
    }
}

export default EventBinding