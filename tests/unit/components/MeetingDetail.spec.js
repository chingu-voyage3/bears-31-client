/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import MeetingDetail from '../../../src/components/Group/MeetingDetail';

describe('Meeting Detail', () => {
  
  const props = {
    match: {
      params: {
        meetingId: 1,
      },
    },
    meetings: [{
      id: 1,
      group_id: 1,
      title: 'First Meeting',
      location: 'Google Hangout',
      detail: 'We will discuss about our project!',
      due: 20171231,
    }],
  };

  const component = shallow(<MeetingDetail {...props} />);

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should render the meeting title passed in as a prop', () => {
    expect(component.find('.meeting-detail__title').text()).to.equal(`Title: ${props.meetings[0].title}`);
  });

  it('Should render the data passed in as a prop', () => {
    expect(component.find('.meeting-detail__date').text()).to.equal(`Date: ${props.meetings[0].due}`);
  });

  it('Should render the location passed in as a prop', () => {
    expect(component.find('.meeting-detail__location').text()).to.equal(`Location: ${props.meetings[0].location}`);
  });

  it('Should render the location passed in as a prop', () => {
    expect(component.find('.meeting-detail__detail').text()).to.equal(`Detail: ${props.meetings[0].detail}`);
  });
});
