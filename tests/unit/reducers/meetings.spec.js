/* global it, describe */
import { expect } from 'chai';
import meetings from '../../../src/reducers/meetings';
import meetingsData from '../../../src/fakeData/meetingsData';

describe('Reducer', () => {
  it('Should return the initial state when no action passed', () => {
    expect(meetings(undefined, {})).to.eql([...meetingsData]);
  });

  it('Should return the correct state', () => {
    const action = {
      type: 'FETCH_MEETING',
      id: 1,
      group_id: 1,
    };

    const expectedState = {
      id: 1,
      group_id: 1,
      title: 'First Meeting',
      location: 'Google Hangout',
      detail: 'We will discuss about our project!',
      due: 20171231,
    };

    expect(meetings(undefined, action)).to.eql(expectedState);
  });
});
