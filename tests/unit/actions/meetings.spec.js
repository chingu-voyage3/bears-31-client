/* global it, describe */
import { expect } from 'chai';
import {
  createMeeting,
  fetchMeeting,
} from '../../../src/actions/actionCreators';

describe('Actions', () => {
  const meeting = {
    id: 1,
    group_id: 1,
    title: 'First Meeting',
    location: 'Google handout',
    details: 'Decide the project',
    due: 201712151600,
  };

  it('Should create an action to create a meeting', () => {
    const expectedAction = {
      type: 'CREATE_MEETING',
      meeting,
    };

    expect(createMeeting(meeting)).to.eql(expectedAction);
  });

  it('Should create an action to pull the meeting data by meeting and group id', () => {
    const expectedAction = {
      type: 'FETCH_MEETING',
      id: meeting.id,
      group_id: meeting.group_id,
    };

    expect(fetchMeeting(meeting.id, meeting.group_id)).to.eql(expectedAction);
  });
});
