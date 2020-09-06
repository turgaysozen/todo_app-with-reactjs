import React, { Component } from 'react'
import Todos from './components/Todos'
import Header from './components/layouts/Header'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        item: 'TODO 1',
        is_completed: false
      },
      {
        id: 2,
        item: 'TODO 2',
        is_completed: false
      },
      {
        id: 3,
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

  render() {
    return (
      <div style={{width:'50%', marginLeft:'25%', marginTop:'50px'}} className="App">
        <Header/>
        <Todos deleteItem={this.deleteItem} markCompleted={this.markCompleted} todos={this.state.todos} />
      </div>
    )
  }
}
