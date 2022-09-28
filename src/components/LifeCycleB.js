import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Shrihari'
        }

        console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {

        console.log("LifeCycleB getDerivedStateFromProps")
        return null;

    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null;

    }

    shouldComponentUpdate() {

        console.log("LIfeCycleB component update")
        return true;
        
    }

    componentDidUpdate() {
        console.log("LIfeCycleB component  did update")
    }


    componentDidMount() {
        console.log("LifeCycleB component did mount")
    }

    render() {
        console.log("LifeCycleB Render ")

        return (

            <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB