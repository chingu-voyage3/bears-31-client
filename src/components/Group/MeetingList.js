// @flow
import * as React from 'react';
import { Layout, Button } from 'antd';

const { Sider } = Layout;

type Props = {
  handleNewClick: Function,
}

// const ButtonStyle = {
//   width: '180px',
//   marginBottom: '10px',
// };

const MeetingList = ({ handleNewClick }: Props) => {
  return (
    <Sider>
      <div>
        <div>
          <Button className="meetinglist__item">First meeting</Button>
          <Button className="meetinglist__item">GraphQL introduction</Button>
        </div>
        <div>
          <Button type="primary" className="meetinglist__new" onClick={handleNewClick}>New</Button>
        </div>
      </div>
    </Sider>
  );
};

export default MeetingList;
