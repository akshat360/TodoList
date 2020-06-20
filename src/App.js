import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      list: [{ id: 0, value: 'Create your First Todo', isDone: true }],
    };
  }

  addTodo(todoText) {
    if (todoText !== '') {
      const newTodo = {
        id: Date.now(),
        value: todoText,
        isDone: false,
      };

      const list = [...this.state.list];
      list.push(newTodo);

      this.setState({
        list,
        newTodo: '',
      });
    }
  }

  removeTodo(id) {
    let list = this.state.list;
    list = list.filter((todo) => todo.id !== id);
    this.setState({
      list,
    });
  }

  fetchInput(todoText) {
    this.setState({
      newTodo: todoText,
    });
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="logo" width="250" />
        <h1 className="App-header">with React.js</h1>
        <div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
            required
            onChange={(e) => this.fetchInput(e.target.value)}
            value={this.state.newTodo}
          />
          <button
            className="Add-btn"
            onClick={() => {
              this.addTodo(this.state.newTodo);
            }}
          >
            Add
          </button>
        </div>
        <div className="list">
          <ul>
            {this.state.list.map((todo) => {
              return (
                <li key={todo.id}>
                  <input type="checkbox" name="isDone" onChange={this.isDone} />
                  <div className="todo-text">{todo.value}</div>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      this.removeTodo(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
