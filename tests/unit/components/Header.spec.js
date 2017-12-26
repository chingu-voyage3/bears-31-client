/* global describe, it, beforeEach */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Header/Header';

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('Should render successfully', () => {
    expect(component.exists()).to.equal(true);
  });

  it('Should render "Hemsut" somewhere', () => {
    expect(component.html()).to.contain('Hemsut');
  });
});
