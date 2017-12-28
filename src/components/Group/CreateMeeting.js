import * as React from 'react';
import { Form, Input, DatePicker, TimePicker } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

const CreateMeeting = () => {
  return (
    <Form action="">
      <FormItem label="Title">
        <Input placeholder="" />
      </FormItem>
      <FormItem label="Date">
        <DatePicker />
      </FormItem>
      <FormItem label="Time">
        <TimePicker />
      </FormItem>
      <FormItem label="Location">
        <Input placeholder="" />
      </FormItem>
      <FormItem label="Detail">
        <TextArea placeholder="" />
      </FormItem>
    </Form>
  );
};

export default CreateMeeting;
