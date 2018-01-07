import React from 'react';
import { Button } from 'antd';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Hemsut</h1>
      <ul>
        <li>Andres</li>
        <li><Button>Logout</Button></li>
      </ul>
    </div>
  );
};

export default Header;
