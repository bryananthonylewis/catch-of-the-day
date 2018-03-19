import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/component/App.js';

describe('<App />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<App />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });