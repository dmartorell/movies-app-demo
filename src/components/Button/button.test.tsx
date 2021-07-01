import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Button from './index';

describe('when rendered with a \'className\' prop', () => {
  it('then it should appear', () => {
    render(<Button className="btn" disabled={false}>Press</Button>);
    expect(screen.getByText('Press')).toBeInTheDocument();
  });
});
