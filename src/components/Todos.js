import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems
    todoItems = this.props.todos.map(todo => {
      return <TodoItem key={todo.id} todo={todo}/>
    })
    return (
      <div className="Todos">
        <h3>Todos</h3>
        {todoItems}
      </div>
    );
  }

}

Todos.propTypes = {
  todos: React.PropTypes.array,
}

export default Todos;
