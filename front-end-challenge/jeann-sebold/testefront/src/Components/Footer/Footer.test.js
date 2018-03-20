import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Footer';

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});