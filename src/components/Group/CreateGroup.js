import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import api from '../../api';

const FormItem = Form.Item;

class CreateGroup extends Component {
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
        let { name } = values;
        api.post('/groups', {
          name,
        })
          .then(({ data }) => {
            if (data.error) {
              this.setState({
                error: data.error,
              });

              console.log(`${data.error}`);
            } else {
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
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input the group name!' }],
          })(<Input
            prefix={<Icon type="user" style={{ fontSize: 13 }} />}
            type="text"
            placeholder="Group name" />
          )}
        </FormItem>

        {error}

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Create Group
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const wrappedForm = Form.create()(CreateGroup);

export default wrappedForm;
