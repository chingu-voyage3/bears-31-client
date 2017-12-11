/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MeetingList from '../../../src/components/Group/MeetingList';

describe('Meeting List', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MeetingList />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should have a button for each meeting', () => {
    expect(component.find('button').exists()).to.equal(true);
  });

  it('Should have a new button to create a meeting', () => {
    expect(component.find('.meetinglist__new').length).to.equal(1);
  });
});
