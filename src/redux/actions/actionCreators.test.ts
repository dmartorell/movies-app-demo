import axios from 'axios';
import {
  loadMovies,
  loadTvShows,
  loadDetail,
  loadSimilarItems,
} from './actionCreators';

import actionTypes from './actionTypes';

jest.mock('axios');
const mockedAxios = (axios as unknown as jest.Mock);

describe('Given a loadMovies function', () => {
  describe('When invoked', () => {
    test('It should dispatch LOAD_MOVIES', async () => {
      mockedAxios.mockResolvedValue({ data: {} });
      const dispatch = jest.fn();
      await loadMovies()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_MOVIES,
        popularMovies: {},
      });
    });
    test('It should dispatch LOAD_MOVIES_ERROR', async () => {
      mockedAxios.mockRejectedValue({ data: { error: 'error' } });
      const dispatch = jest.fn();
      await loadMovies()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_MOVIES_ERROR,
      });
    });
  });
});
describe('Given a loadTvShows function', () => {
  describe('When invoked', () => {
    test('It should dispatch LOAD_TVSHOWS', async () => {
      mockedAxios.mockResolvedValue({ data: {} });
      const dispatch = jest.fn();
      await loadTvShows()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_TVSHOWS,
        popularTvShows: {},
      });
    });
    test('It should dispatch LOAD_TVSHOWS_ERROR', async () => {
      mockedAxios.mockRejectedValue({ data: {} });
      const dispatch = jest.fn();
      await loadTvShows()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_TVSHOWS_ERROR,
      });
    });
  });
});
describe('Given a loadDetail function', () => {
  describe('When invoked', () => {
    test('It should dispatch LOAD_DETAIL', async () => {
      mockedAxios.mockResolvedValue({ data: { id: '12' } });
      const dispatch = jest.fn();
      await loadDetail({ id: '12', type: 'movie' })(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_DETAIL,
        selectedItem: { id: '12' },
      });
    });
    test('It should dispatch LOAD_DETAIL_ERROR', async () => {
      mockedAxios.mockRejectedValue('error');
      const dispatch = jest.fn();
      await loadDetail({ id: '12', type: 'movie' })(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_DETAIL_ERROR,
      });
    });
  });
});
describe('Given a loadSimilarItems function', () => {
  describe('When invoked', () => {
    test('It should dispatch LOAD_SIMILAR', async () => {
      mockedAxios.mockResolvedValue({ data: { id: '12' } });
      const dispatch = jest.fn();
      await loadSimilarItems({ id: '12', type: 'movie' })(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_SIMILAR,
        similarItems: { id: '12' },
      });
    });
    test('It should dispatch LOAD_SIMILAR_ERROR', async () => {
      mockedAxios.mockRejectedValue('error');
      const dispatch = jest.fn();
      await loadSimilarItems({ id: '12', type: 'movie' })(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_SIMILAR_ERROR,
      });
    });
  });
});
