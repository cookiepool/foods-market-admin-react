import React from 'react';

import '../../assets/css/user/user.scss';

import { Input, Button, Table, Divider } from 'antd';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.tableCol = [
      {
        title: "姓名",
        dataIndex: "name",
      },
      {
        title: "电话",
        dataIndex: "tel",
      },
      {
        title: "密码",
        dataIndex: "upwd",
      },
      {
        title: "性别",
        dataIndex: "gender"
      },
      {
        title: "地址",
        dataIndex: "address"
      },
      {
        title: "操作",
        dataIndex: "operation",
        render: (text, record) => (
          <span>
            <Button type="link">封锁</Button>
            <Divider type="vertical" />
            <Button type="danger">删除</Button>
          </span>
        ),
      }
    ];

    this.state = {
      userinfo: [
        {
          key: 1,
          name: "喀喀喀",
          tel: "18381317545",
          upwd: "654321",
          gender: "男",
          address: "重庆市渝北区钒氮合金分的将发动机防盗扣",
        }
      ],
    };
  }

  render() {
    return (
      <div className="userlist-wraper">
        <nav className="search-options flex-btn-center">
          <div className="left-input flex-start-center">
            <span className="input-tag">用户ID:</span>
            <Input className="input-box"></Input>
          </div>
          <div className="right-btn">
            <Button type="primary" icon="search">查询</Button>
          </div>
        </nav>

        <section className="content-wrap">
          <Table columns={ this.tableCol } dataSource={this.state.userinfo} />,
        </section>
      </div>
    )
  }
}

export default UserList;