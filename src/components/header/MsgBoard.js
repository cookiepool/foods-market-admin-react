import React from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

class Msg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'lee'
    }
  }

  callBack = (key) => {
    console.log(key)
  }

  render() {
    return (
      <div className="msg-wraper">
        <Tabs defaultActiveKey="1" onChange={ this.callBack }>
          <TabPane tab="通知（4）" key="1">
            content one
          </TabPane>
          <TabPane tab="消息（2）" key="2">
            content two
          </TabPane>
          <TabPane tab="代办（3）" key="3">
            content three
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Msg;