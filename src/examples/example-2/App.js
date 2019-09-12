import React from 'react';

// 引入路由相关
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// 引入样式文件
import './style.scss';

// 引入其它组件
import Index from './Index.js';
import News from './News.js';
import UserCenter from './UserCenter.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.navList = [
      {tab: 1, title: '首页', path: '/'},
      {tab: 2, title: '新闻中心', path: '/news'},
      {tab: 3, title: '个人中心', path: '/usercenter'}
    ]
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div className="main-wrap">
          <div className="nav-wrap">
            {
              this.navList.map((item, index) => {
                return (
                  <li className="nav-item" key={ index }><Link to={ item.path }>{ item.title }</Link></li>
                );
              })
            }
          </div>

          <div className="content-wrap">
            <Route path="/" exact component={ Index }></Route>
            <Route path="/news" component={ News }></Route>
            <Route path="/usercenter" component={ UserCenter }></Route>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;