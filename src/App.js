import React from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// 引入样式
import './assets/css/app.scss';

// 引入antd
import { Layout, Icon, Menu } from 'antd';
const { Header, Footer, Content, Sider} = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, // 是否折叠左边导航栏
    };

    // 菜单
    this.menuList = (
      <Menu>
        <Menu.item>
          <Icon type="user"></Icon>
          <span>个人中心</span>
        </Menu.item>
        <Menu.item>
          <Icon type="setting"></Icon>
          <span>个人设置</span>
        </Menu.item>
        <Menu.Divider />
        <Menu.item>
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.item>
      </Menu>
    )
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
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
            <Header style={{ background: '#fff', paddingLeft: '16px' }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                style={{fontSize: '26px'}}
                onClick={ this.toggleNavbar }
              />
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