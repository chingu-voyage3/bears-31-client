/* global it, describe */
import { expect } from 'chai';
import { createMeeting } from '../../../src/actions/meetings';

describe('Actions', () => {
  const meeting = {
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
});
