import React from 'react';
import HeroSection from './index';
import { render } from '../../utils/test-utils';

describe('Given a HeroSection component', () => {
  describe('When is rendered', () => {
    test('Then main image should be in the document', () => {
      const { container } = render(<HeroSection />);
      const chooseTag = container.querySelector('.hero-image');
      expect(chooseTag).toBeDefined();
    });
  });
});
