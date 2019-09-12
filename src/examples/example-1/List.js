import React from 'react';

import { Link } from 'react-router-dom';

class List extends React.Component {

  componentDidMount() {
    console.log(this.props.match);
  }

  render() {
    return (
      <div>
        <h1>这是列表页</h1>
        <Link to="/"><button>去首页</button></Link>
      </div>
    )
  }
}

export default List;