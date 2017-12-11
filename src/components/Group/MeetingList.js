import React from 'react';

const MeetingList = () => {
  return (
    <div>
      <div>
        <button>First meeting</button>
        <button>GraphQL introduction</button>
      </div>
      <div>
        <button className="meetinglist__new">New</button>
      </div>
    </div>

  );
};

export default MeetingList;
