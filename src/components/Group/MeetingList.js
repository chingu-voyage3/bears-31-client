import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const MeetingList = () => {
  return (
    <Sider>
      <Menu>
        <div>
          <button className="meetinglist__item">First meeting</button>
          <button className="meetinglist__item">GraphQL introduction</button>
        </div>
        <div>
          <button className="meetinglist__new">New</button>
        </div>
      </Menu> 
    </Sider>

  );
};

export default MeetingList;
