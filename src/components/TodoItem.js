import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.is_completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            borderBottom: '2px #ccc dotted',
            padding: '5px',
            marginTop:'10px',
            fontSize: '22px',
            color: this.props.todo.is_completed ? 'green' : 'red',
            cursor: 'pointer'
        }
    }

    render() {
        const { id, item } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input onChange={this.props.markCompleted.bind(this, id)}  type="checkbox"/> {' '}
                    {item}
                    <button onClick={this.props.deleteItem.bind(this, id)} style={{color:'red', cursor:'pointer', float:'right', fontSize:'18px', backgroundColor:'white', marginRight:'10px'}}>Delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
