import React, { Component } from "react";
import Todolist from "./components/Todolist";
import Todoinput from "./components/Todoinput";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    items: [],
    item: "",
    id: uuidv4(),
    editItem: false
  };
  handlechange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      item: this.state.item,
      id: this.state.id
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      id: uuidv4(),
      item: "",
      editItem: false
    });
  };
  handleClick = () => {
    const empt = [];
    this.setState({
      items: empt
    });
  };
  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto md-col-8 mt-4">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <Todoinput
              item={this.state.item}
              handlechange={this.handlechange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <Todolist
              handleClick={this.handleClick}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              items={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
