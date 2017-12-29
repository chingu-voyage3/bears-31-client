import * as React from 'react';
import { Modal, Form, Input, DatePicker, TimePicker } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const CreateMeeting = Form.create()((props) => {
  const {
    showCreateMeeting, onCancel, onCreate, form,
  } = props;
  const { getFieldDecorator } = form;
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time' }],
  };
  return (
    <Modal
      title="Create a new meeting"
      visible={showCreateMeeting}
      okText="Create"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form>
        <FormItem label="Title">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the title of your meeting' }],
          })(<Input placeholder="" />)}
        </FormItem>
        <FormItem label="Date">
          {getFieldDecorator('date-picker', config)(<DatePicker />)}
        </FormItem>
        <FormItem label="Time">
          {getFieldDecorator('date-time-picker', config)(<TimePicker />)}
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

export default CreateMeeting;
