import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { asFragment } = render(<Button color="primary">My button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
