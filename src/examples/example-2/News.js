import React from 'react';

import {Route, Link} from 'react-router-dom';

import Fan from './news/Fanaical';
import Tech from './news/Tech';
import Soc from './news/Social';

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>欢迎来到新闻中心~~~~~</h1>
        <ul className="child-nav-wrap">
          <Link to='/news/fan'><li className="child-nav-item">财经</li></Link>
          <Link to='/news/soc'><li className="child-nav-item">社会</li></Link>
          <Link to='/news/tech'><li className="child-nav-item">科技</li></Link>
        </ul>
        <div>
          <Route path="/news/fan" component={ Fan }></Route>
          <Route path="/news/soc" component={ Soc }></Route>
          <Route path="/news/tech" component={ Tech }></Route>
        </div>
      </div>
    )
  }
}

export default PageOne;