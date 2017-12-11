import React from 'react';

const MeetingList = () => {
  return (
    <div>
      <div>
        <button className="meetinglist__item">First meeting</button>
        <button className="meetinglist__item">GraphQL introduction</button>
      </div>
      <div>
        <button className="meetinglist__new">New</button>
      </div>
    </div>

  );
};

export default MeetingList;
