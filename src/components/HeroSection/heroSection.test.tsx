import React from 'react';
import HeroSection from './index';
import { render, screen, fireEvent } from '../../utils/test-utils';

describe('Given a HeroSection component', () => {
  describe('When is rendered', () => {
    test('Then main image should be in the document', () => {
      const { container } = render(<HeroSection />);
      const chooseTag = container.querySelector('.hero-image');
      expect(chooseTag).toBeDefined();
    });
  });
});
describe('Given a HeroSection component', () => {
  describe('When TvShows button is clicked', () => {
    test('Then class \'--selected\' should be added', () => {
      render(<HeroSection />);
      const buttons = screen.getAllByRole('button');
      const tvShowsBtn = buttons.find((button) => button.textContent === 'TV Shows');
      if (tvShowsBtn) fireEvent.click(tvShowsBtn);
      expect(tvShowsBtn?.classList.contains('main-btn--selected')).toBe(true);
    });
  });
});
