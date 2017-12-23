// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

const { Sider } = Layout;

type Props = {
  handleNewClick: Function,
  fetchMeeting: Function,
  meetings: Array<Object>,
}

const MeetingList = ({ handleNewClick, fetchMeeting, meetings }: Props) => (
  <Sider>
    <div>
      <div>
        {meetings.map(meeting => (
          <Link to={`/${meeting.group_id}/meetings/${meeting.id}`} key={meeting.title}>
            <Button className="meetinglist__item">{meeting.title}</Button>
          </Link>
          ))}
      </div>
      <div>
        <Button type="primary" className="meetinglist__new" onClick={handleNewClick}>New</Button>
      </div>
    </div>
  </Sider>
);

export default MeetingList;
