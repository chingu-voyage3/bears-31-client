import React from 'react';
import { Row, Col } from 'antd';
import LoginForm from './LoginForm';

const Login = () => (
  <div className="login">
    <h1 style={{ textAlign: 'center' }}>Login</h1>
    <Row type="flex" justify="center">
      <Col xs={24} md={10} lg={8}>
        <LoginForm />
      </Col>
    </Row>
  </div>
);

export default Login;
