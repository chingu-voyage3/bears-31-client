/* global it, describe */
import { expect } from 'chai';
import meetings from '../../../src/reducers/meetings';
import meetingsData from '../../../src/fakeData/meetingsData';

describe('Reducer', () => {
  it('Should return the initial state when no action passed', () => {
    expect(meetings(undefined, {})).to.eql([...meetingsData]);
  });
});
