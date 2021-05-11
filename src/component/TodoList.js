import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, handleClear } = this.props;
    return (
      <ul className="list-group my-3">
        <h2 className="text-center text-capitalize">Items </h2>
        {items.map((item) => {
          return <TodoItem key={item.id} title={item.title} handleEdit={() => handleEdit(item.id)} handleDelete={() => handleDelete(item.id)} />;
        })}

        <button type="submit" onClick={handleClear} className="btn btn-block btn-danger">
          Clear List
        </button>
      </ul>
    );
  }
}
