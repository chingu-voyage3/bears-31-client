// @flow
import * as React from 'react';

type MeetingsProps = {
    title: string,
    location: string,
    detail: string,
    due: number,
    match: Object,
    meetings: Array<Object>,
};

const MeetingList = ({ title, due, location, detail }: MeetingsProps) => (
    <div>
      <ul>
        <li className="meeting-detail__title">Title: {title}</li>
        <li className="meeting-detail__date">Date: {due}</li>
        <li className="meeting-detail__location">Location: {location}</li>
        <li className="meeting-detail__detail">Detail: {detail}</li>      
      </ul>
    </div>
);



export default MeetingList;
