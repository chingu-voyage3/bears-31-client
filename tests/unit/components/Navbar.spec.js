/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from '../../../src/components/Navbar/Navbar';

describe('Navbar', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should render "Hemsut" somewhere', () => {
    expect(component.html()).to.contain('Hemsut');
  });
});
