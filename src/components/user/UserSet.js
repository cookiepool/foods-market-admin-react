import React from 'react';

class UserSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {}
    };
  }

  render() {
    return (
      <div className="userset-wraper">
        <h1>usercset</h1>
      </div>
    )
  }
}

export default UserSet;