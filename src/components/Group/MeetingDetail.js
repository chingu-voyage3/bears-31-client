// @flow
import * as React from 'react';

type MeetingsProps = {
    group_id: number,
    title: string,
    location: string,
    detail: string,
    due: number,
};

const MeetingList = ({ title, due, location, detail }: MeetingsProps) => {
  return (
    <div>
      <ul>
        <li className="meeting-detail__title">Title: {title}</li>
        <li className="meeting-detail__date">Date: {due}</li>
        <li className="meeting-detail__location">Location: {location}</li>
        <li className="meeting-detail__detail">Detail: {detail}</li>
      </ul>
      

    </div>
  );
};

export default MeetingList;
