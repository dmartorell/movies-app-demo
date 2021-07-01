import React from 'react';
import TvShowsList from './index';
import { render } from '../../utils/test-utils';

describe('Given a TvShowsList component', () => {
  test('Then at leat one title should be rendered', () => {
    const tvShows = [{
      backdrop_path: '',
      id: 1,
      original_language: '',
      overview: '',
      poster_path: '',
      first_air_date: '',
      name: 'the title',
      vote_average: 1,
    }];
    const { container } = render(<TvShowsList list={tvShows} />);
    const chooseTag = container.querySelector('.info-title');
    expect(chooseTag?.textContent).toBe('the title');
  });
});
