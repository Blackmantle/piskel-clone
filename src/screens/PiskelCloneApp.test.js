import React from 'react';
import ReactDOM from 'react-dom';
import PiskelCloneApp from './PiskelCloneApp';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PiskelCloneApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
