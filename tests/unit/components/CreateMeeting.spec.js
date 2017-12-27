/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CreateMeeting from '../../../src/components/Group/CreateMeeting';

describe('Create a meeting', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CreateMeeting />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should have four inputs', () => {
    expect(component.find('input').length).to.equal(4);
  });
});
