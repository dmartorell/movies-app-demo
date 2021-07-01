import React from 'react';
import Navbar from './index';
import { render } from '../../utils/test-utils';

describe('Given a Navbar component', () => {
  describe('When is rendered', () => {
    test('Then \'nonomo\' logo should be in the document', () => {
      const { container } = render(<Navbar />);
      const chooseTag = container.querySelector('.logo');
      expect(chooseTag?.textContent).toBe('nonomo');
    });
  });
});
