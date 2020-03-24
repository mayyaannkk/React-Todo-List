import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class Todolist extends Component {
  render() {
    const { items, handleClick, handleDelete, handleEdit } = this.props;
    return (
      <>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">Todo List</h3>

          {items.map(ite => {
            return (
              <Todoitem
                key={ite.id}
                title={ite.item}
                handleDelete={() => handleDelete(ite.id)}
                handleEdit={() => handleEdit(ite.id)}
              />
            );
          })}

          <button
            onClick={handleClick}
            type="button"
            className="btn btn-block btn-danger mt-5"
          >
            Clear List
          </button>
        </ul>
      </>
    );
  }
  w2;
}
