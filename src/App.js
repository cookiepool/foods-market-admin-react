import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/app.css';
import './assets/css/extra.scss';

import { Button } from 'antd';


class App extends React.Component {
  constructor(ttt) {
    super(ttt);
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
          <h1 className="scss-style-test">啊哈哈哈哈</h1>
        </div>
        <hr/>
        <div>
          <ChildCom msg={'hello'}></ChildCom>
        </div>
      </div>
    )
  }
}

class ChildCom extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // {msg: 'hello'}
    
    this.users = [
      { username: 'Jerry', age: 21, gender: 'male' },
      { username: 'Tomy', age: 22, gender: 'male' },
      { username: 'Lily', age: 19, gender: 'female' },
      { username: 'Lucy', age: 20, gender: 'female' }
    ];

    this.state = {
      name: 'haha',
      age: 23
    };
    this.handleClickChild = this.handleClickChild.bind(this);
  }
  handleClickChild() {
    this.setState({
      age: 26
    });
  }
  render() {
    return (
      <div>
        <p>name: {this.state.name}</p>
        <p>age: {this.state.age}</p>
        <p>msg: {this.props.msg}</p>
        <button onClick={this.handleClickChild}>子组件点击测试</button>
        <hr/>
        <ul>
        {
          this.users.map((item, index) => {
            return <li onClick={ this.handleClickChild } key={index}>{ item.username }</li>
          })
        }
        </ul>
        <hr/>
        <div>
          <Button type="primary">Hello,AntD</Button>
        </div>
      </div>
    )
  }
}

export default App;
