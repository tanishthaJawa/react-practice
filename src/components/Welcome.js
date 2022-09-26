import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, age, children } = this.props
        return (
            <div>
                <h1>
                    Welcome {name} <br />
                    Age {age}

                </h1>
                {children}
            </div>

        )
    }
}
export default Welcome