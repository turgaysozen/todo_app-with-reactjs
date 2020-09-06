import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({ 
            title: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="title" value={this.state.title} onChange={this.onChange} style={{ width: '91%', fontSize: '20px' }} type="text" />
                    <input value="Add" type="submit" style={{ fontSize: '20px', marginLeft: '10px', cursor: 'pointer' }}/>
                </form>
            </div>
        )
    }
}
