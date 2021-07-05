import React from 'react';
import MediaItemList from './List';
import { render } from '../../utils/test-utils';

describe('Given a MoviesList component', () => {
  test('Then at leat one title should be rendered', () => {
    const movies = [{
      backdrop_path: '',
      id: 1,
      original_language: '',
      overview: '',
      poster_path: '',
      release_date: '',
      title: 'the title',
      vote_average: 1,
    }];
    const { container } = render(<MediaItemList list={movies} category="movie" />);
    const chooseTag = container.querySelector('.info-title');
    expect(chooseTag?.textContent).toBe('the title');
  });
});
