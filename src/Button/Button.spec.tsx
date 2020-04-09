import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('<Button />', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const { asFragment } = render(<Button>My button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should run onClick action', () => {
    const myClick = jest.fn();
    const { getByText } = render(<Button onClick={myClick}>My button</Button>);
    fireEvent.click(getByText('My button'));
    expect(myClick).toBeCalled();
  });

  it('should render disabled', () => {
    const { getByText } = render(<Button disabled>My button</Button>);
    const btn = getByText('My button');
    expect(btn.hasAttribute('disabled')).toBe(true);
    expect(btn.classList.contains('disabled')).toBe(true);
  });

  it('should with "button" type', () => {
    const { getByText } = render(<Button type="button">My button</Button>);
    expect(getByText('My button').getAttribute('type')).toBe('button');
  });

  it('should with "submit" type', () => {
    const { getByText } = render(<Button type="submit">My button</Button>);
    expect(getByText('My button').getAttribute('type')).toBe('submit');
  });

  it('should with "reset" type', () => {
    const { getByText } = render(<Button type="reset">My button</Button>);
    expect(getByText('My button').getAttribute('type')).toBe('reset');
  });

  it('should render with primary color', () => {
    const { getByText } = render(<Button color="primary">My button</Button>);
    expect(getByText('My button').classList.contains('primary')).toBe(true);
  });

  it('should render with secondary color', () => {
    const { getByText } = render(<Button color="secondary">My button</Button>);
    expect(getByText('My button').classList.contains('secondary')).toBe(true);
  });

  it('should render with success color', () => {
    const { getByText } = render(<Button color="success">My button</Button>);
    expect(getByText('My button').classList.contains('success')).toBe(true);
  });

  it('should render with danger color', () => {
    const { getByText } = render(<Button color="danger">My button</Button>);
    expect(getByText('My button').classList.contains('danger')).toBe(true);
  });

  it('should render with warning color', () => {
    const { getByText } = render(<Button color="warning">My button</Button>);
    expect(getByText('My button').classList.contains('warning')).toBe(true);
  });

  it('should render with info color', () => {
    const { getByText } = render(<Button color="info">My button</Button>);
    expect(getByText('My button').classList.contains('info')).toBe(true);
  });
});
