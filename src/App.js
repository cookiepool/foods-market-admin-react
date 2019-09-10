import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lee'
    }
  }

  handleClick = () => {
    console.log('hello world!');
    console.log(this.state.name);
    this.setState({
      name: 'haha'
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <hr/>
        <div>
          <p>{ this.state.name }</p>
          <button onClick={this.handleClick}>点我测试</button>
        </div>
      </div>
    )
  }
}

export default App;
