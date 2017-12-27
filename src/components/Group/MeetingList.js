// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Modal, Button } from 'antd';
import CreateMeeting from './CreateMeeting';

const { Sider } = Layout;

type State = {
  showCreateMeeting: boolean,
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
    };
  }
  handleNewClick = () => {
    this.setState(prevState => ({
      showCreateMeeting: !prevState.showCreateMeeting,
    }));
  }
  handleOk = () => {
    this.setState({
      showCreateMeeting: false,
    });
  }
  handleCancel = () => {
    this.setState({
      showCreateMeeting: false,
    });
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
              <Modal
                title="Create a new meeting"
                visible={this.state.showCreateMeeting}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
              >
                <CreateMeeting />
              </Modal>
          </div>
      </Sider>
    );
  }
}

export default MeetingList;
