import React, { Component } from 'react'

class GreetUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div> Welcome Bird</div>
        //     )
        // }
        // else {
        //     return (
        //         <div> Welcome Guest</div>
        //     )
        // }

        // let message
        // if (this.state.isLoggedIn) {
        //     message= <div>Welcome Bird</div>
        // }
        // else {
        //     message= <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        // return this.state.isLoggedIn ? (
        //     <div> Welcome Bird</div>
        //     ) : (
        //     <div> Welcome Guest</div>
        // )

        return this.state.isLoggedIn && <div> Welcome Bird</div>

    }
}

export default GreetUser