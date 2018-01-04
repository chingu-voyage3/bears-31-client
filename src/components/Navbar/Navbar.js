import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './Navbar.css';

const { Header } = Layout;

class Navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    window.location.assign('/');
  }

  render() {
    return (
      <Layout>
        <Header className="navbar__header">
          <div className="logo">
            <div className="logo__container">
              <Link to="/">Hemsut</Link>
            </div>
          </div>
          <Menu theme="light" mode="horizontal" className="navbar__menu">
            <Menu.Item key="1">
              <Link to="/login">Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default Navbar;
