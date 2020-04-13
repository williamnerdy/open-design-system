import React from 'react';
import classNames from 'classnames';

type Aligns = 'middle' | 'bottom' | 'top';

type Justifies = 'left' | 'center' | 'right';

type Reverse = true;

type Mixed = { align?: Aligns; justify?: Justifies };

type Responsives = Mixed | Aligns | Reverse;

interface Props {
  /** Children */
  children: React.ReactNode;
  /** Align content */
  align?: Aligns;
  /** justify */
  justify?: Justifies;
  /** Reverse */
  reverse?: Reverse;
  /** Small size */
  sm?: Responsives;
  /** Medium size */
  md?: Responsives;
  /** Large size */
  lg?: Responsives;
}

const getResponsive = (name: string, val?: Responsives) => {
  const align = typeof val === 'object' && val.align ? val.align : val;

  return {
    [`${name}-${align}`]: align && typeof align !== 'object'
  };
};

const Row = ({ children, align, reverse, sm, md, lg }: Props) => {
  const classes = classNames('col', {
    [`align-${align}`]: align,
    ...getResponsive('sm', sm),
    ...getResponsive('md', md),
    ...getResponsive('lg', lg),
    reverse
  });

  return <div className={classes}>{children}</div>;
};

export default Row;
