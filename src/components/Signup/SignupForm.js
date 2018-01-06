import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import api from '../../api';

const FormItem = Form.Item;

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { username, password, email, firstName, lastName } = values;
        api.post('/users/register', {
          username,
          password,
          email,
          firstName,
          lastName,
        })
          .then(({ data }) => {
            window.location.assign('/');
          })
          .catch((resErr) => {
            console.error(resErr);
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    let { error } = this.state;
    return (
      <Form onSubmit={this.handleLogin}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(<Input
            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
            type="text"
            placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email' }],
          })(<Input
            prefix={<Icon type="global" style={{ fontSize: 13 }} />}
            type="email"
            placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your first name' }],
          })(<Input
            prefix={<Icon type="profile" style={{ fontSize: 13 }} />}
            type="text"
            placeholder="First name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last name' }],
          })(<Input
            prefix={<Icon type="profile" style={{ fontSize: 13 }} />}
            type="text"
            placeholder="Last name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>

        {error}

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Sign up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const wrappedForm = Form.create()(SignupForm);

export default wrappedForm;
