import React from 'react';
import Group from '../src/components/Group/Group';
import './App.css';

const App = props => (
  <div className="App">
    <h1>Hemsut</h1>
    <Group {...props} />
  </div>
);

export default App;

