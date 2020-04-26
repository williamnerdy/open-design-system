import React from 'react';
import classNames from 'classnames';

type Aligns = 'middle' | 'bottom' | 'top';

type Justifies = 'left' | 'center' | 'right';

type Reverse = true;

type Mixed = { align?: Aligns; justify?: Justifies; reverse?: Reverse };

type Responsives = Mixed | Aligns | Reverse | Justifies;

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
  const justify = typeof val === 'object' && val.justify ? val.justify : val;
  const reverse = typeof val === 'object' && val.reverse ? val.reverse : val;

  return {
    [`${name}-${align}`]: align && typeof align !== 'object',
    [`${name}-${justify}`]: justify && typeof align !== 'object',
    [`${name}-${reverse}`]: reverse && typeof reverse !== 'object'
  };
};

const Row = ({ children, justify, align, reverse, sm, md, lg }: Props) => {
  const classes = classNames('row', {
    [`align-${align}`]: align,
    [`justify-${justify}`]: justify,
    [`reverse-${reverse}`]: reverse,
    ...getResponsive('sm', sm),
    ...getResponsive('md', md),
    ...getResponsive('lg', lg),
    reverse
  });

  return <div className={classes}>{children}</div>;
};

export default Row;
