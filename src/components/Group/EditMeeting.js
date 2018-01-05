// @flow
import * as React from 'react';
import { Modal, Form, Input, DatePicker } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

type Props = {
  showEditMeeting: bool,
  onCancel: Function,
  form: Object,
  meeting: {
    id: number,
    group_id: number,
    title: string,
    due: number,
    location: string,
    detail: string,
  }
};

const EditMeeting = Form.create()(({
  form, showEditMeeting, onCancel, meeting,
}: Props) => {
  const { getFieldDecorator } = form;
  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time' }],
  };
  return (
    <Modal
      title="Meeting Detail"
      visible={showEditMeeting}
      okText="Save"
      onCancel={onCancel}
    >
      <Form>
        <FormItem label="Title">
          {getFieldDecorator('title', { initialValue: meeting.title }, {
            rules: [{ required: true, message: 'Please input the title of your meeting' }],
          })(<Input />)}
        </FormItem>
        <FormItem label="Date">
          {getFieldDecorator('date-time-picker', config, { initialValue: meeting.due })(<DatePicker showTime={{ format: 'HH:mm' }} />)}
        </FormItem>
        <FormItem label="Location">
          {getFieldDecorator('location', { initialValue: meeting.location }, {
            rules: [{ required: true, message: 'Please input the location of your meeting' }],
          })(<Input placeholder="" />)}
        </FormItem>
        <FormItem label="Detail">
          {getFieldDecorator('detail', { initialValue: meeting.detail })(<TextArea placeholder="" />)}
        </FormItem>
      </Form>
    </Modal>
  );
});

export default EditMeeting;
