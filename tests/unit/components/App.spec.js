/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../../src/App';

describe('App', () => {
  it('should render "Hemsut" somewhere', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html().includes('Hemsut')).to.equal(true);
  });
});
