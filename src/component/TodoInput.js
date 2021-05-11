import React, { Component } from 'react';

// Todo input class based component
export default class TodoInput extends Component {
  render() {
    const { item, editItem, handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h2 className="text-center text-capitalize">Todo App</h2>
        <div className="card card-body mt-3">
          <div className="input-group text-uppercase">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book my-1"></i>
              </div>
            </div>
            <input type="text" value={item} className="form-control" onChange={handleChange} />
          </div>
          <button type="submit" disabled={item ? false : true} className={editItem ? 'btn btn-block btn-success mt-2' : 'btn btn-block btn-primary mt-2'}>
            {editItem ? 'Edit Item' : 'Add Item'}
          </button>
        </div>
      </form>
    );
  }
}
