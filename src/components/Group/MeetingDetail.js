// @flow
import * as React from 'react';

type MeetingsProps = {
    match: Object,
    meetings: Array<Object>,
};

const MeetingList = ({ match, meetings }: MeetingsProps) => {
  const meetingId = parseInt(match.params.meetingId, 10);
  const currentMeeting = meetings.find(meeting => meeting.id === meetingId);
  return (
    <div>
      <ul>
        <li className="meeting-detail__title">Title: {currentMeeting.title}</li>
        <li className="meeting-detail__date">Date: {currentMeeting.due}</li>
        <li className="meeting-detail__location">Location: {currentMeeting.location}</li>
        <li className="meeting-detail__detail">Detail: {currentMeeting.detail}</li>
      </ul>
    </div>
  );
}

export default MeetingList;
