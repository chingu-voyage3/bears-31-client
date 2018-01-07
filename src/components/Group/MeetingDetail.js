// @flow
import * as React from 'react';
import { Button } from 'antd';
import EditMeeting from './EditMeeting';

type State ={
  showEditMeeting: bool,
}

type Props = {
    match: Object,
    meetings: [{
      id: number,
      title: string,
      due: number,
      location: string,
      detail: string,
    }],
};

class MeetingList extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      showEditMeeting: false,
    };
  }
  handleEditMeeting = () => {
    this.setState({
      showEditMeeting: true,
    });
  }
  handleCancel = () => {
    this.setState({
      showEditMeeting: false,
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    const { meetings, match } = this.props;
    const firstMeetingId = (meetings.length > 0 ? meetings[0].id : 0);
    const meetingId =
      (match.params.meetingId ? parseInt(match.params.meetingId, 10) : firstMeetingId);
    const currentMeeting = meetings.find(meeting => meeting.id === meetingId);
    return (
      <div className="meeting-detail">
        {
          currentMeeting &&
          <div>
            <h2>Meeting Detail</h2>
              <ul className="meeting-detail__list">
                <li className="meeting-detail__title">Title: {currentMeeting.title}</li>
                  <li className="meeting-detail__date">Date: {currentMeeting.due}</li>
                    <li className="meeting-detail__location">Location: {currentMeeting.location}</li>
                      <li className="meeting-detail__detail">Detail: {currentMeeting.detail}</li>
              </ul>
                <Button className="meeting-detail__button" onClick={this.handleEditMeeting}>Edit</Button>
                  <EditMeeting
                    ref={this.saveFormRef}
                    showEditMeeting={this.state.showEditMeeting}
                    onCancel={this.handleCancel}
                    meeting={currentMeeting}
                  />
          </div>
        }
      </div>
    );
  }
}


export default MeetingList;
