// @flow
import * as React from 'react';

type MeetingsProps = {
    match: Object,
    meetings: [{
      id: number,
      title: string,
      due: number,
      location: string,
      detail: string,
    }],
};

const MeetingList = ({ match, meetings }: MeetingsProps) => {
  // Assign the first meeting id when there is no params (initial render)
  const meetingId =
    (match.params.meetingId ? parseInt(match.params.meetingId, 10) : meetings[0].id);
  const currentMeeting = meetings.find(meeting => meeting.id === meetingId);

  return (
    <div>
      {
        currentMeeting &&
        <ul>
          <li className="meeting-detail__title">Title: {currentMeeting.title}</li>
          <li className="meeting-detail__date">Date: {currentMeeting.due}</li>
          <li className="meeting-detail__location">Location: {currentMeeting.location}</li>
          <li className="meeting-detail__detail">Detail: {currentMeeting.detail}</li>
        </ul>
      }
    </div>
  );
};

export default MeetingList;
