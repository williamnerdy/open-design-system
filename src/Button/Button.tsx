import classNames from 'classnames';
import React from 'react';
import './Button.scss';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

interface Props {
  /** Children */
  children: React.ReactNode;
  /** Button color */
  color?: Colors;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Callback */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Whether button is disabled */
  disabled?: boolean;
}

const Button = ({
  color = 'primary',
  type,
  onClick,
  disabled,
  children
}: Props) => (
  <button
    type={type}
    className={classNames('button', color, { disabled })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
