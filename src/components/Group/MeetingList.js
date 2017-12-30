// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import CreateMeeting from './CreateMeeting';

const { Sider } = Layout;

type State = {
  showCreateMeeting: boolean,
  redirect: boolean,
};

type Props = {
  meetings: [{
    id: number,
    group_id: number,
    title: string,
    due: number,
    location: string,
    detail: string,
  }],
}

class MeetingList extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      showCreateMeeting: false,
      redirect: false,
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
      console.log(values);
      form.resetFields();
      this.setState({
        showCreateMeeting: false,
      });
    });

  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    const { meetings } = this.props;
    return (
      <Sider>
        <div>
          {meetings.map(meeting => (
            <Link to={`/${meeting.group_id}/meetings/${meeting.id}`} key={meeting.title}>
              <Button className="meetinglist__item">{meeting.title}</Button>
            </Link>
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

