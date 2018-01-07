import React from 'react';
import { Row, Col } from 'antd';
import SignupForm from './SignupForm';

const Signup = () => (
  <div className="signup">
    <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
    <Row type="flex" justify="center">
      <Col xs={24} md={10} lg={8}>
        <SignupForm />
      </Col>
    </Row>
  </div>
);

export default Signup;
