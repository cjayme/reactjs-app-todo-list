import React, { Component } from "react";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col" />
            <div class="col-6">
              <br />
              <br />
              <h1>Todo List</h1>
              <br />
              <form>
                <div class="form-group">
                  <label>What to do.</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Type item here"
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => this.addItem()}
                  disabled={!this.state.newItem.length}
                >
                  Add
                </button>
                <br /> <br />
                <ul class="list-group list-group-flush">
                  {this.state.list.map(item => {
                    return (
                      <li class="list-group-item" key={item.id}>
                        {item.value}
                        <button
                          className="btn btn-outline-primary float-right"
                          type="button"
                          onClick={() => this.deleteItem(item.id)}
                        >
                          Delete
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </form>
            </div>
            <div class="col" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
