import React, { Component } from 'react'
import Todos from './components/Todos'
import Header from './components/layouts/Header'
import AddTodo from './components/AddTodo'
import {v4 as uuid} from 'uuid'

export default class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        item: 'TODO 1',
        is_completed: false
      },
      {
        id: uuid(),
        item: 'TODO 2',
        is_completed: false
      },
      {
        id: uuid(),
        item: 'TODO 3',
        is_completed: false
      }
    ]
  }

  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(id === todo.id){
        todo.is_completed = ! todo.is_completed
      }
      return todo
    })})
  }

  deleteItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      item: title,
      is_completed: false
    }
    console.log(newTodo)
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div style={{width:'50%', marginLeft:'25%', marginTop:'50px'}} className="App">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos deleteItem={this.deleteItem} markCompleted={this.markCompleted} todos={this.state.todos} />
      </div>
    )
  }
}
