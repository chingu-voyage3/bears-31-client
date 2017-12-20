import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;

const MeetingList = ({ handleNewClick }) => {
  return (
    <Sider>
      <div>
        <div>
          <button className="meetinglist__item">First meeting</button>
          <button className="meetinglist__item">GraphQL introduction</button>
        </div>
        <div>
          <button className="meetinglist__new" onClick={handleNewClick}>New</button>
        </div>
      </div> 
    </Sider>

  );
};

export default MeetingList;
