import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 0, name: "This", item: "Item 1" },
        { id: 1, name: "is", item: "Item 2" },
        { id: 2, name: "ReactJS", item: "Item 3" },
        { id: 3, name: "ID", item: "Item 4" },
        { id: 4, name: "Example", item: "Item 5" },
        { id: 5, name: "Hanna", item: "Item 6" },
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
        <ul id="todo" className="List-style">
          {this.state.items.map((item, i) =>
            <li
              className='list-group-item List-item'
              key={i}
              data-id={item.name}>
              {item.item}
              <button
                className="Button-style"
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
