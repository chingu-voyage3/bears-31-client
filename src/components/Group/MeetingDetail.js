import * as React from 'react';
// import { Layout } from 'antd';

// const { Content} = Layout;


const MeetingList = (props) => {
  return (
    <div>
      <h2 className="meeting-detail__title">{props.meetings.title}</h2>
    </div>
  );
};

export default MeetingList;
