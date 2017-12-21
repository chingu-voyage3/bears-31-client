import React from 'react';
import Header from '../src/components/Header/Header';
import Group from '../src/components/Group/Group';
import './App.css';

const App = props => (
  <div className="App">
    <Header />
    <Group {...props} />
  </div>
);

export default App;
