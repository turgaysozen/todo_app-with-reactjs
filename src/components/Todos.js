import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
        <TodoItem deleteItem={this.props.deleteItem} key={todo.id} markCompleted={this.props.markCompleted} todo={todo}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
