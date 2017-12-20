// @flow
import * as React from 'react';
import { Layout, Button } from 'antd';

const { Sider } = Layout;

type Props = {
  handleNewClick: Function,
  meetings: Array<Object>,
}

const MeetingList = ({ handleNewClick, meetings }: Props) => {
  return (
    <Sider>
      <div>
        <div>
          {meetings.map(meeting => (
            <Button className="meetinglist__item" key={meeting.title}>{meeting.title}</Button>
          ))}
        </div>
        <div>
          <Button type="primary" className="meetinglist__new" onClick={handleNewClick}>New</Button>
        </div>
      </div>
    </Sider>
  );
};

export default MeetingList;
