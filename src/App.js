import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, name: "Hanna" },
        { id: 1, name: "ReactJS" },
      ]
    }
  }

  handleClick(id, e) {
    alert(id)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ID Example</h1>
        </header>
        <ul id="todo">
          {this.state.items.map((item, i) =>
            <li
              className='list-group-item'
              key={i}
              data-id={item.name}>
              {item.name}
              <button
                onClick={this.handleClick.bind(this, item.name)}
              >
                Click Me
            </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
