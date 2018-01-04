import * as React from 'react';
import { Modal, Form, Input, DatePicker, TimePicker } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const EditMeeting = Form.create()((props) => {
  const { getFieldDecorator } = props.form;
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time' }],
  };
  return (
    <Modal
      title="Meeting Detail"
      visible={props.showEditMeeting}
      okText="Save"
    >
      <Form>
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title of your meeting' }],
          })(<Input defaultValue="title" />)}
        </FormItem>
        <FormItem label="Date">
          {getFieldDecorator('date-time-picker', config)(<DatePicker showTime={{ format: 'HH:mm' }} />)}
        </FormItem>
        <FormItem label="Location">
          {getFieldDecorator('location', {
            rules: [{ required: true, message: 'Please input the location of your meeting'}],
          })(<Input placeholder="" />)}
        </FormItem>
        <FormItem label="Detail">
          {getFieldDecorator('detail')(<TextArea placeholder="" />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

export default EditMeeting;
