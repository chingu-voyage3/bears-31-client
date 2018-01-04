// @flow
import * as React from 'react';
import { Layout, Button } from 'antd';
import CreateMeeting from './CreateMeeting';

const { Sider } = Layout;

type State = {
  showCreateMeeting: boolean,
};

type Props = {
  createMeeting: Function,
  history: Object,
  meetings: [{
    id: number,
    group_id: number,
    title: string,
    due: number,
    location: string,
    detail: string,
  }],
  groupId: number,
}

class MeetingList extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      showCreateMeeting: false,
    };
  }
  handleNewClick = () => {
    this.setState(prevState => ({
      showCreateMeeting: !prevState.showCreateMeeting,
    }));
  }
  handleCancel = () => {
    this.setState({
      showCreateMeeting: false,
    });
  }
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      const { detail, location, title } = values;
      
      const due = values['date-time-picker'].format('x');
      const newMeeting = {
        id: 3,
        group_id: this.props.groupId,
        title,
        location,
        detail,
        due,
      };
      this.props.createMeeting(newMeeting);
      form.resetFields();
      this.setState({
        showCreateMeeting: false,
      });
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  handleMeetingButtonClick = (groupId: number, id: number) => {
    this.props.history.push(`/${groupId}/meetings/${id}`);
  }
  render() {
    const { meetings } = this.props;
    return (
      <Sider>
        <div>
          {meetings.map(meeting => (
            <Button key={meeting.title} className="meetinglist__item" onClick={() => this.handleMeetingButtonClick(meeting.group_id, meeting.id)}>{meeting.title}</Button>
          ))}
        </div>
          <div>
            <Button type="primary" className="meetinglist__new" onClick={this.handleNewClick}>New</Button>
              <CreateMeeting
                ref={this.saveFormRef}
                showCreateMeeting={this.state.showCreateMeeting}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
              />
          </div>
      </Sider>
    );
  }
}

export default MeetingList;
