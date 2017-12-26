/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import MeetingList from '../../../src/components/Group/MeetingList';

describe('Meeting List', () => {
  let component;
  const handleNewClickSpy = spy();
  const props = {
    handleNewClick: handleNewClickSpy,
    meetings: [
      {
        title: 'First meeting',
        date: '12/16',
      },
    ],
  };

  beforeEach(() => {
    component = shallow(<MeetingList {...props} />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should have a button for each meeting', () => {
    expect(component.find('.meetinglist__item').exists()).to.equal(true);
  });

  it('Should render title of each meeting when passed in as a prop', () => {
    expect(component.find('.meetinglist__item').html().includes(props.meetings[0].title)).to.equal(true);
  });

  describe('New button', () => {
    it('Should have a "new" button to create a meeting', () => {
      expect(component.find('.meetinglist__new').length).to.equal(1);
    });
  });
});
