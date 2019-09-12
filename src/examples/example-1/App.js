import React from 'react';
import logo from './logo.svg';
import './app.css';

// 引入路由相关
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// 引入其它组件
import List from '../example-1/List.js';
import Home from '../example-1/Home.js';
import Redir from '../example-1/RedirectCom.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.id = '2950515';
    this.userList = [
      {uid: 2950515, name: '金蛇郎君'},
      {uid: 2954562, name: '懒猫用户-1'},
      {uid: 2951478, name: '懒猫用户-2'}
    ]
    this.state = {
      name: 'lee'
    };
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
        <nav className="nav-bar">
          <Router>
            <ul>
              <li><Link to="/">首页</Link></li>
              {
                this.userList.map((item, index) => {
                  return (
                    <li key={ index }><Link to={`/list/${item.uid}`}>{ item.name }</Link></li>
                  );
                })
              }
            </ul>
            <Route path="/" exact component={ Home }></Route>
            <Route path="/list/:id" component={ List }></Route>
            <Route path="/redir" component={ Redir }></Route>
          </Router>
        </nav>
      </div>
    )
  }
}
export default App;
