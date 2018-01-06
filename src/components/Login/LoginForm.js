import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import api from '../../api';

const FormItem = Form.Item;

class LoginForm extends Component {
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
        let { username, password } = values;
        // Now with you can use the username and password to post
        // to the login API endpoint
        api.post('/users/login', {
          username,
          password,
        })
          .then(({ data }) => {
            if (data.error) {
              this.setState({
                error: data.error,
              });

              console.log(`${data.error}`);
            } else {
              window.localStorage.setItem('token', data.token);
              window.location.assign('/');
            }
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
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const wrappedForm = Form.create()(LoginForm);

export default wrappedForm;
