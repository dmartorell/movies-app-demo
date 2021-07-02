import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Detail from './index';
import { loadDetail } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Detail component', () => {
  describe('When is redered with a selectedItem as initial state', () => {
    const initialState = { selectedItem: { id: '12', title: 'The Title' } };
    const dispatch = jest.fn();
    beforeEach(() => {
      render(<Detail />, { initialState });
    });
    test('Then the title should be in the document', () => {
      loadDetail({ id: '12', type: 'movie' }).mockResolvedValue({
        type: actionTypes.LOAD_DETAIL,
        selectedItem: {},
      });
      render(
        <Detail />, initialState,
      );
      expect(screen.getByText(/Broccoli/i)).toBeInTheDocument();
    });
  });
});
