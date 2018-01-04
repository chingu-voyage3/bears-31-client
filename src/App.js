import React from 'react';
import Group from '../src/components/Group/Group';
import Navbar from './components/Navbar/Navbar';

import './App.css';

export const App = props => (
  <div className="App">
    <Navbar />
    <Group {...props} />
  </div>
);

export default App;
