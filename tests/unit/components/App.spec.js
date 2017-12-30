/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import App from '../../../src/App';

describe('App', () => {
  const mockStore = configureStore();
  const store = mockStore({ meetings: [] });

  it('should render "Hemsut" somewhere', () => {
    const wrapper = mount(<Provider store={store}><Router><App /></Router></Provider>);
    expect(wrapper.html().includes('Hemsut')).to.equal(true);
  });
});
