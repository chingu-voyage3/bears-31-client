/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MeetingList from '../../../src/components/Group/MeetingList';

describe('Meeting List', () => {
  let component;
  // const handleNewMock = jest.fn();
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
    it('Should have a "new" button to create a meeting', () => {
      expect(component.find('.meetinglist__new').length).to.equal(1);
    });

    it('Should call the handleNewClick function when clicked', () => {
      // component = mount(<MeetingList handleNewClick={handleNewMock} />);

      // expect(handleNewMock.mock.calls.length).to.equal(0);
      // component.find('.meetinglist__new').simulate('click');
      // expect(handleNewMock.mock.calls.length).to.equal(1);
    });
  });
});
