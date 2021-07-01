import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../redux/store/index';

function render(
  component: any,
  { initialState, ...renderOptions }: any = {},
) {
  function Wrapper({ children }: any) {
    return (
      <Provider store={configureStore(initialState)}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}
export * from '@testing-library/react';
export { render };
