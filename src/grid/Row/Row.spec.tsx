import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Row from './Row';

describe('<Row />', () => {
  const contentRow = 'Row content';
  beforeEach(cleanup);

  it('should render without prop', () => {
    const { asFragment, getByText } = render(<Row>{contentRow}</Row>);
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(contentRow).classList.contains('row')).toBe(true);
  });

  describe('Align row', () => {
    it('should render with align in left', () => {
      const { asFragment, getByText } = render(
        <Row align="middle">Row content</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('align-middle')).toBe(
        true
      );
    });

    it('should render with align in bottom', () => {
      const { asFragment, getByText } = render(
        <Row align="bottom">Row content</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('align-bottom')).toBe(
        true
      );
    });

    it('should render with align in left', () => {
      const { asFragment, getByText } = render(
        <Row align="top">Row content</Row>
      );

      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('align-top')).toBe(true);
    });
  });

  describe('Justify', () => {
    it('should render with justify left', () => {
      const { asFragment, getByText } = render(
        <Row justify="left">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('justify-left')).toBe(
        true
      );
    });

    it('should render with justify center', () => {
      const { asFragment, getByText } = render(
        <Row justify="center">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('justify-center')).toBe(
        true
      );
    });

    it('should render with justify right', () => {
      const { asFragment, getByText } = render(
        <Row justify="right">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('justify-right')).toBe(
        true
      );
    });
  });

  describe('Justify by size', () => {
    it('should render with justify center sm', () => {
      const { asFragment, getByText } = render(
        <Row sm="center">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('sm-center')).toBe(true);
    });

    it('should render with justify center md', () => {
      const { asFragment, getByText } = render(
        <Row md="center">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('md-center')).toBe(true);
    });

    it('should render with justify center lg', () => {
      const { asFragment, getByText } = render(
        <Row lg="middle">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('lg-middle')).toBe(true);
    });
  });

  describe('Reverse row', () => {
    it('should render with reverse', () => {
      const { asFragment, getByText } = render(
        <Row reverse={true}>Row content</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('reverse-true')).toBe(
        true
      );
    });
  });

  describe('justify, align and reverse', () => {
    it('should render with justify center, aling middle, sm and reverse', () => {
      const { asFragment, getByText } = render(
        <Row sm={{ justify: 'center', align: 'middle', reverse: true }}>
          {contentRow}
        </Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('sm-center')).toBe(true);
      expect(getByText(contentRow).classList.contains('sm-middle')).toBe(true);
      expect(getByText(contentRow).classList.contains('sm-true')).toBe(true);
    });

    it('should render with justify center, aling middle, md and reverse', () => {
      const { asFragment, getByText } = render(
        <Row md={{ justify: 'center', align: 'middle', reverse: true }}>
          {contentRow}
        </Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('md-center')).toBe(true);
      expect(getByText(contentRow).classList.contains('md-middle')).toBe(true);
      expect(getByText(contentRow).classList.contains('md-true')).toBe(true);
    });

    it('should render with justify center, aling middle, lg and reverse', () => {
      const { asFragment, getByText } = render(
        <Row lg={{ justify: 'center', align: 'middle', reverse: true }}>
          {contentRow}
        </Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('lg-center')).toBe(true);
      expect(getByText(contentRow).classList.contains('lg-middle')).toBe(true);
      expect(getByText(contentRow).classList.contains('lg-true')).toBe(true);
    });
  });

  describe('Individual responsiveness of sm', () => {
    it('should render with sm justify center', () => {
      const { asFragment, getByText } = render(
        <Row sm="center">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('sm-center')).toBe(true);
    });

    it('should render with sm aling middle', () => {
      const { asFragment, getByText } = render(
        <Row sm="middle">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('sm-middle')).toBe(true);
    });

    it('should render with sm reverse', () => {
      const { asFragment, getByText } = render(
        <Row sm={{ reverse: true }}>{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('sm-true')).toBe(true);
    });
  });

  describe('Individual responsiveness of md', () => {
    it('should render with md justify center', () => {
      const { asFragment, getByText } = render(
        <Row md="center">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('md-center')).toBe(true);
    });

    it('should render with md aling middle', () => {
      const { asFragment, getByText } = render(
        <Row md="middle">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('md-middle')).toBe(true);
    });

    it('should render with md reverse', () => {
      const { asFragment, getByText } = render(
        <Row md={{ reverse: true }}>{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('md-true')).toBe(true);
    });
  });

  describe('Individual responsiveness of lg', () => {
    it('should render with lg justify center', () => {
      const { asFragment, getByText } = render(
        <Row lg="center">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('lg-center')).toBe(true);
    });

    it('should render with lg aling middle', () => {
      const { asFragment, getByText } = render(
        <Row lg="middle">{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('lg-middle')).toBe(true);
    });

    it('should render with lg reverse', () => {
      const { asFragment, getByText } = render(
        <Row lg={{ reverse: true }}>{contentRow}</Row>
      );
      expect(asFragment()).toMatchSnapshot();
      expect(getByText(contentRow).classList.contains('lg-true')).toBe(true);
    });
  });
});
