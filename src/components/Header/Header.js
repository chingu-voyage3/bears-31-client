import React from 'react';
import { Layout, Menu } from 'antd';

const { Header: HeaderContainer } = Layout;

const Header = () => {
  return (
    <Layout>
      <HeaderContainer>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Andres</Menu.Item>
          <Menu.Item key="2">Logout</Menu.Item>
        </Menu>
      </HeaderContainer>
    </Layout>
  );
};

export default Header;
