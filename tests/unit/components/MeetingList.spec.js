/* global describe, it, beforeEach, window */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import { MemoryRouter as Router } from 'react-router-dom';
import MeetingList from '../../../src/components/Group/MeetingList';

window.matchMedia = window.matchMedia;

describe('Meeting List', () => {
  let component;
  const handleNewClickSpy = spy();
  const props = {
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

    it('Should change showCreateMeeting flag when clicked', () => {
      component = mount(<Router><MeetingList {...props} /></Router>);
      component.find('.meetinglist__new').first().simulate('click');
      expect(component.find('MeetingList').instance().state.showCreateMeeting, 'first click').to.equal(true);
      component.find('.meetinglist__new').first().simulate('click');
      expect(component.find('MeetingList').instance().state.showCreateMeeting, 'second click').to.equal(false);
    });
  });
});
