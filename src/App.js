import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

export default class App extends Component {
  state = {
    items: [],
    item: '',
    id: uuidv1(),
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: this.state.id,
    };
    const updatedItem = [...this.state.items, newItem];

    this.setState({
      items: updatedItem,
      item: '',
      id: uuidv1(),
      editItem: false,
    });
  };

  handleEdit = (id) => {
    const editValue = this.state.items.find((item) => item.id === id);
    const filteredItem = this.state.items.filter((item) => item.id !== id);

    this.setState({
      items: filteredItem,
      item: editValue.title,
      id: id,
      editItem: true,
    });
  };

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };
  handleClear = () => {
    this.setState({
      items: [],
      editItem: false,
      id: '',
      item: '',
    });
  };
  render() {
    console.log(this.state.item);
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <TodoInput
                item={this.state.item}
                editItem={this.state.editItem}
                handleChange={this.handleChange}
                handleEdit={this.handleEdit}
                handleSubmit={this.handleSubmit}
              />
              <TodoList
                key={this.state.id}
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleClear={this.handleClear}
              />
            </div>
          </div>
        </div>{' '}
      </React.Fragment>
    );
  }
}
