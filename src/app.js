import React, { Component } from 'react';
import { NavLink as Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import HeaderLogo from './components/HeaderLogo';

import ReportListPage from './containers/ReportList';
import ReportPage from './containers/Report';
import GroupPage from './containers/Group';
import UserPage from './containers/User';
import HomePage from './containers/Home';

import Footer from './components/Footer';
import { hot } from 'react-hot-loader/root';

const App = class App extends Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <HeaderLogo />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>周报</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户中心</span>
                </span>
              }
            >
              <Menu.Item key="3">修改密码</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <Link to="/">首页</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/reportList">列表页</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
              <Router>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/groupList" component={GroupPage} />
                  <Route path="/userList" component={UserPage} />
                  <Route path="/reportList" component={ReportListPage} />
                  <Route path="/report/:id" component={ReportPage} />
                </Switch>
              </Router>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
};
export default hot(App);
