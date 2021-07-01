import React from 'react';
import NotFound from './index';
import { render } from '../../utils/test-utils';

describe('Given a NotFound component', () => {
  describe('When is rendered', () => {
    test('Then the message \'Oops, wrong door... but you can dance!\' should be in the document', () => {
      const { container } = render(<NotFound />);
      const chooseTag = container.querySelector('h1');
      expect(chooseTag?.textContent).toBe('Oops, wrong door... but you can dance!');
    });
  });
});
