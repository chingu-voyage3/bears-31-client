/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import MeetingList from '../../../src/components/Group/MeetingList';

describe('Meeting List', () => {
  let component;
  const props = {
    meetings: [
      {
        title: 'First meeting',
        date: '12/16',
      },
    ],
  };

  beforeEach(() => {
    component = shallow(<MeetingList />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should have a button for each meeting', () => {
    expect(component.find('.meetinglist__item').exists()).to.equal(true);
  });

  it('Should render title of each meeting when passed in as a prop', () => {
    // expect(component.find('.meetinglist__item').text()).to.equal(props.meetings[0].title);
  });

  describe('New button', () => {
    const newMeetingSpy = spy();

    it('Should have a "new" button to create a meeting', () => {
      expect(component.find('.meetinglist__new').length).to.equal(1);
    });

    it('Should call the handleNewClick function when clicked', () => {
      component = mount(<MeetingList handleNewClick={newMeetingSpy} />);

      expect(newMeetingSpy.notCalled).to.equal(true);
      component.find('.meetinglist__new .ant-btn-primary').simulate('click');
      expect(newMeetingSpy.calledOnce).to.equal(true);
    });
  });
  
  // describe('Meeting buttons', () => {
  //   it('Should call the handleShowClick when clicked', () => {

  //   });
  // });
});
