/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import MeetingDetail from '../../../src/components/Group/MeetingDetail';

describe('Meeting Detail', () => {
  
  const props = {
    group_id: 1,
    title: 'First Meeting',
    location: 'Google Hangout',
    details: 'We will discuss about our project!',
    due: 20171231,
  };

  const component = shallow(<MeetingDetail {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should render the meeting detail passed in as a prop', () => {
    // expect(component.find('.meeting-detail__title').text()).to.equal(props);
    // console.log(props);
  });
});
