import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            food: 'corn'
        }
    }
    handleChangeUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleChangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleChangeFood = (event) => {
        this.setState({
            food: event.target.value
        })
    }
    submitHandler = (event) => {
        alert(`${this.state.username} ${this.state.food} ${this.state.comments}`)
        event.preventDefault()
    }
    render() {
        const {username,food,comments} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handleChangeUserName} />
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={comments} onChange={this.handleChangeComments} ></textarea>
                </div>
                <div>
                    <label >Food</label>
                    <select value={food} onChange={this.handleChangeFood}>
                        <option value="cheese">Cheese</option>
                        <option value="cream">cream</option>
                        <option value="corn">Corn</option>
                    </select>
                </div>
                <div>
                    <button type ="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form