import React from 'react';
import SimilarItems from './index';
import { render } from '../../utils/test-utils';

describe('Given a SimilarItems component', () => {
  describe('When it receives data', () => {
    test('Should render a \'You might also like...\' title', () => {
      const list = [{
        backdrop_path: '',
        id: 1,
        original_language: '',
        overview: '',
        poster_path: '',
        release_date: '',
        title: '',
        vote_average: 1,
      }];
      const { container } = render(<SimilarItems data={list} />);
      const chooseTag = container.querySelector('h2');
      expect(chooseTag?.textContent).toBe('You might also like...');
    });
  });
  describe('When it does not receives any data', () => {
    test('Then text \'You might also like...\' should not be rendered', () => {
      const list = undefined;
      const { container } = render(<SimilarItems data={list} />);
      const chooseTag = container.querySelector('h2');
      expect(chooseTag).toBeFalsy();
    });
  });
});
