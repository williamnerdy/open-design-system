import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Collumn from './Collumn';

describe('<Collumn />', () => {
  const contentCollumn = 'Collumn content';
  beforeEach(cleanup);

  it('should render without prop', () => {
    const { asFragment, getByText } = render(
      <Collumn>{contentCollumn}</Collumn>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(contentCollumn).classList.contains('col')).toBe(true);
  });

  it('should render with 1 size', () => {
    const { asFragment, getByText } = render(
      <Collumn size={1}>{contentCollumn}</Collumn>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(contentCollumn).classList.contains('size-1')).toBe(true);
  });

  it('should render with 6 size', () => {
    const { asFragment, getByText } = render(
      <Collumn size={6}>{contentCollumn}</Collumn>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(contentCollumn).classList.contains('size-6')).toBe(true);
  });

  it('should render with 12 size', () => {
    const { asFragment, getByText } = render(
      <Collumn size={12}>{contentCollumn}</Collumn>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(contentCollumn).classList.contains('size-12')).toBe(true);
  });

  describe('Responsive sizes', () => {
    it('should render with sm 1 size', () => {
      const { asFragment, getByText } = render(
        <Collumn sm={1}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('sm-1')).toBe(true);
    });

    it('should render with md 1 size', () => {
      const { asFragment, getByText } = render(
        <Collumn md={1}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('md-1')).toBe(true);
    });

    it('should render with lg 1 size', () => {
      const { asFragment, getByText } = render(
        <Collumn lg={1}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('lg-1')).toBe(true);
    });
  });

  describe('align', () => {
    it('should render with align left', () => {
      const { asFragment, getByText } = render(
        <Collumn align="left">{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('align-left')).toBe(
        true
      );
    });

    it('should render with align center', () => {
      const { asFragment, getByText } = render(
        <Collumn align="center">{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('align-center')).toBe(
        true
      );
    });

    it('should render with align right', () => {
      const { asFragment, getByText } = render(
        <Collumn align="right">{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('align-right')).toBe(
        true
      );
    });
  });

  describe('align by size', () => {
    it('should render with align center sm', () => {
      const { asFragment, getByText } = render(
        <Collumn sm="center">{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('sm-center')).toBe(
        true
      );
    });

    it('should render with align center sm', () => {
      const { asFragment, getByText } = render(
        <Collumn sm={{ align: 'center' }}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('sm-center')).toBe(
        true
      );
    });

    it('should render with align center md', () => {
      const { asFragment, getByText } = render(
        <Collumn md="center">{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('md-center')).toBe(
        true
      );
    });

    it('should render with align center md', () => {
      const { asFragment, getByText } = render(
        <Collumn md={{ align: 'center' }}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('md-center')).toBe(
        true
      );
    });

    it('should render with align center lg', () => {
      const { asFragment, getByText } = render(
        <Collumn lg="center">{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('lg-center')).toBe(
        true
      );
    });

    it('should render with align center lg', () => {
      const { asFragment, getByText } = render(
        <Collumn lg={{ align: 'center' }}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('lg-center')).toBe(
        true
      );
    });
  });

  describe('align and size', () => {
    it('should render with align center and size 6 sm', () => {
      const { asFragment, getByText } = render(
        <Collumn sm={{ size: 6, align: 'center' }}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('sm-6')).toBe(true);
      expect(getByText(contentCollumn).classList.contains('sm-center')).toBe(
        true
      );
    });

    it('should render with align center and size 6 md', () => {
      const { asFragment, getByText } = render(
        <Collumn md={{ size: 6, align: 'center' }}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('md-6')).toBe(true);
      expect(getByText(contentCollumn).classList.contains('md-center')).toBe(
        true
      );
    });

    it('should render with align center and size 6 lg', () => {
      const { asFragment, getByText } = render(
        <Collumn lg={{ size: 6, align: 'center' }}>{contentCollumn}</Collumn>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentCollumn).classList.contains('lg-6')).toBe(true);
      expect(getByText(contentCollumn).classList.contains('lg-center')).toBe(
        true
      );
    });
  });
});
