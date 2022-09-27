import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Shrihari'
        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
    }
    shouldComponentUpdate() {
        console.log("LIfeCycleA component update")
        return true;
    }
    componentDidUpdate() {
        console.log("LIfeCycleA component  did update")
    }
    componentDidMount() {
        console.log("LIfecycleA component did mount")
    }

    handleChangeState = () => {
        this.setState({
            name:'cat'
        })

    }
    render() {
        console.log("LifecycleA Render ")
        return (

            <div>LifeCycleA
                <button onClick={this.handleChangeState}>State Change</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA