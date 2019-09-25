import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// 引入样式
import './assets/css/app.scss';

// 引入mock api
import api from './api';

// 引入自定义组件
import Msg from './components/header/MsgBoard.js';

// 引入antd
import { Layout, Icon, Menu, Dropdown } from 'antd';
const { Header, Footer, Content, Sider} = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, // 是否折叠左边导航栏
    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    api.test().then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });

    api.msg.getUserMsg().then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    // 菜单
    const menuList = (
      <Menu>
        <Menu.Item key="0">
          <Icon type="user"></Icon>
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="setting"></Icon>
          <span>个人设置</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )

    return (
      <div className="all-wraper">
        <Layout>
          {/* 左边导航栏 */}
          <Sider 
            width="250px"
            trigger={null} collapsible
            collapsed={ this.state.collapsed }
            style={ { minHeight: '100vh' } }
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <div className="sider-logo flex-ard-center">
                <img className={ this.state.collapsed ? 'logo-icon collapsed' : 'logo-icon'} src={require('./assets/images/logo_icon.png')} alt="logo"/>
                <span className={ this.state.collapsed ? 'logo-title collapsed' : 'logo-title'}>小菜在线</span>
              </div>
              <Menu.Item key="1">
                <Icon type="dashboard" />
                <span>数据状态</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="team" />
                <span>用户管理</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="user" />
                <span>个人中心</span>
              </Menu.Item>
            </Menu>
          </Sider>

          {/* 右边主体内容 */}
          <Layout style={ { minHeight: '100vh' } } >
            <Header className="header-wraper" style={{ background: '#fff', paddingLeft: '16px' }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                style={{fontSize: '26px'}}
                onClick={ this.toggleNavbar }
              />
              <div className="header-index-wraper flex-all-center">
                <Dropdown overlay={ Msg } trigger={ ['click'] }>
                  <div className="msg-wraper">
                    <Icon type="bell"></Icon>
                  </div>
                </Dropdown>
                {/* DropDown这个组件在里面写内容时需要用一个父元素把其它的包裹起来，不然报错 */}
                <Dropdown overlay={ menuList }>
                  <div className="user-wraper">
                    <img className="avatar-img" src={ require('./assets/images/default_avatar.jpg') } alt="avatar"/>
                    <span>{ 'Haoo Lee' }</span>
                  </div>
                </Dropdown>
              </div>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: '600px',
              }}
            >
              Content
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  };
}

export default App;