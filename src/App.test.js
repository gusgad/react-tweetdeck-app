import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  console.log('got here 1')
  const div = document.createElement('div');
  console.log('got here 2')
  ReactDOM.render(<App />, div);
  console.log('got here 3')
  ReactDOM.unmountComponentAtNode(div);
});
