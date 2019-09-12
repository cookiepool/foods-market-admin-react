import React from 'react';

// import {Redirect} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.push('/redir');
  }
  render() {
    return (
      <div>
        <h1>这是首页</h1>
        {/* <Redirect to="/redir"></Redirect> */}
      </div>
    )
  }
}

export default Home;