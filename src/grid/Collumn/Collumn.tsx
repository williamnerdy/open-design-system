import React from 'react';
import classNames from 'classnames';

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Aligns = 'left' | 'center' | 'right';

type Mixed = { size?: GridSizes; align?: Aligns };

type Responsives = Mixed | GridSizes | Aligns;

interface Props {
  /** Children */
  children: React.ReactNode;
  /** Extreme small size */
  size?: GridSizes;
  /** Align content */
  align?: Aligns;
  /** Small size */
  sm?: Responsives;
  /** Medium size */
  md?: Responsives;
  /** Large size */
  lg?: Responsives;
}

const getResponsive = (name: string, val?: Responsives) => {
  const align = typeof val === 'object' && val.align ? val.align : val;
  const size = typeof val === 'object' && val.size ? val.size : val;

  return {
    [`${name}-${align}`]: align && typeof align !== 'object',
    [`${name}-${size}`]: size && typeof size !== 'object'
  };
};

const Collumn = ({ children, size, align, sm, md, lg }: Props) => {
  const classes = classNames('col', {
    [`size-${size}`]: size,
    [`align-${align}`]: align,
    ...getResponsive('sm', sm),
    ...getResponsive('md', md),
    ...getResponsive('lg', lg)
  });

  return <div className={classes}>{children}</div>;
};

export default Collumn;
