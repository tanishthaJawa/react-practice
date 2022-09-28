import React, { Component } from 'react'
import ForwardRefsDemo from './ForwardRefsDemo'

class ForwadRefsParent extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <ForwardRefsDemo ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwadRefsParent